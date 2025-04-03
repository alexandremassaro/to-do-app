criar uma aplicação simples de lista de tarefas (To-Do List) usando o padrão MVC. A aplicação permitirá que os usuários adicionem e visualizem tarefas. Este exercício ajudará você a entender como os componentes do MVC interagem entre si.

Estrutura do Projeto

    index.html: A interface do usuário.
    style.css: Estilo para a aplicação.
    app.js: Lógica da aplicação usando o padrão MVC.

Passo 1: Criar a Estrutura do Projeto

Crie uma nova pasta chamada to-do-app e dentro dela, crie os seguintes arquivos:

/to-do-app

│

├── index.html

├── style.css

└── app.js

Passo 2: Implementar o HTML

Adicione o seguinte código ao arquivo index.html:

<!DOCTYPE html>

<html lang="pt-PT">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Lista de Tarefas MVC</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <h1>Lista de Tarefas</h1>

    <input type="text" id="taskInput" placeholder="Digite uma tarefa">

    <button id="addTaskButton">Adicionar Tarefa</button>

    <ul id="taskList"></ul>

    <script src="app.js"></script>

</body>

</html>

Passo 3: Adicionar Estilo

Adicione o seguinte código ao arquivo style.css para estilizar a aplicação:

body {

    font-family: Arial, sans-serif;

    margin: 20px;

}

h1 {

    color: #333;

}

input {

    padding: 10px;

    margin-right: 10px;

}

button {

    padding: 10px;

}

ul {

    list-style-type: none;

    padding: 0;

}

li {

    margin: 5px 0;

    padding: 10px;

    background-color: #f4f4f4;

    border: 1px solid #ddd;

}

Passo 4: Implementar a Lógica do MVC

Adicione o seguinte código ao arquivo app.js:

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