// Create todos array
var todos = JSON.parse(localStorage.getItem("tasks")) || [];

var todoId = Number(localStorage.getItem("todoId"));

// choose DOM elements
var elTodoForm = $_('.js-task-form');
var elTodoInput = $_('.js-task-input', elTodoForm);
var elTodoList = $_('.js-tasks-list');
var elTodoTemplate = $_('#task-template').content;

var updateLocalTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(todos));
}

var updateLocalTodoId = function () {
  localStorage.setItem("todoId", todoId);
}

var renderTodos = function () {
  todos.forEach(todo => {
    elTodoList.innerHTML = '';

    var elTodoItem = elTodoTemplate.cloneNode(true);

    $_('.js-todo__checkbox').checked = todo.completed;
  });
}

var pushElToTodosList = function (elInputValue) {
  todos.push({
    todoText: elInputValue,
    completed: false,
    id: ++todoId
  });
}

var onFormSubmit = function (evt) {
  evt.preventDefault();

  var elInputValue = elTodoInput.value.trim();

  if (!elInputValue) {
    alert('Iltimos, vazifani kiriting!');
    return;
  }

  pushElToTodosList(elInputValue);
  renderTodos();

  updateLocalTasks();
  updateLocalTodoId();
}

// Formani submit hodisasiga quloq solamiz
elTodoForm.addEventListener('submit', onFormSubmit);


