// Modelo
class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }
}

// Visão
class TaskView {
    constructor() {
        this.taskList = document.getElementById('taskList');
        this.taskInput = document.getElementById('taskInput');
        this.addTaskButton = document.getElementById('addTaskButton');
    }
}

// Controlador
class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.addTaskButton.addEventListener('click', () => {
            this.addTask();
        });
    }

    addTask() {
        const taskName = this.view.taskInput.value;
        if (taskName) {
            this.model.addTask(taskName);
            this.updateView();
            this.view.taskInput.value = ''; // Limpa o campo de entrada
        } else {
            alert("Por favor, digite uma tarefa.");
        }
    }

    updateView() {
        const tasks = this.model.getTasks();
        this.view.taskList.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');
    }
}

// Inicialização da aplicação
const app = new TaskController(new TaskModel(), new TaskView());
