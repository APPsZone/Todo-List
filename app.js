// Gather all UI elements

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// These are stack of EventListener
immediateLoadEventListener();

function immediateLoadEventListener() {
  //  Get todos from local storage and render it in browser
  document.addEventListener("DOMContentLoaded", getTodos);

  // This event for add todo item
  todoForm.addEventListener("submit", addToDo);

  // This event for delete todo item
  todoList.addEventListener("click", deleteToDo);

  // This event for clear all of todo items
  clearButton.addEventListener("click", clearTodos);
  // This event have a task to filter in todo list
  filterInput.addEventListener("keyup", filterTodos);
}

// Reusable Codes/Refractor
function createTodoElement(value) {
  //  Make list element
  const li = document.createElement("li");

  // Adding class at class name "li"
  li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

  // Add children into "li" element
  li.appendChild(document.createTextNode(value));

  // Make a delete button
  const a = document.createElement("a");

  // Give a property for "a" element
  a.href = "#";
  a.className = "badge badge-danger delete-todo";

  a.innerHTML = "Delete";

  // Insert "a" element to "li" children
  li.appendChild(a);

  // Input "li" element that have made by JS into "todo list" element
  todoList.appendChild(li);
}

function getItemFromLocalStorage() {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

// These are the DOM functions
function getTodos() {
  const todos = getItemFromLocalStorage();

  todos.forEach((todo) => {
    createTodoElement(todo);
  });
}

function addToDo(e) {
  e.preventDefault();

  if (todoInput.value) {
    createTodoElement(todoInput.value);

    // Empty the input text box
    addToDoLocalStorage(todoInput.value);

    todoInput.value = "";
  } else {
    alert("Textbox still empty.");
  }
}

function addToDoLocalStorage(todoInputValue) {
  const todos = getItemFromLocalStorage();

  todos.push(todoInputValue);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    if (confirm("Are you sure to delete this item?")) {
      const parent = e.target.parentElement;

      parent.remove();

      deleteTodoLocalStorage(parent);
    }
  }
}

function deleteTodoLocalStorage(deletedElement) {
  const todos = getItemFromLocalStorage();

  todos.forEach((todo, index) => {
    if (deletedElement.firstChild.textContent == todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function clearTodos() {
  todoList.innerHTML = "";

  clearTodosLocalStorage();
}

function clearTodosLocalStorage() {
  localStorage.clear();
}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.indexOf(filterText) != -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display:none !important;");
    }
  });
}
