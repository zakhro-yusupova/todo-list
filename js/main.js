const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form__input");
const elList = document.querySelector(".form__list");

const btns = document.querySelector(".btns")
const allBtn = document.querySelector(".all-btn")
const completeBtn = document.querySelector(".complete-btn")
const uncompleteBtn = document.querySelector(".uncomplete-btn")

const all = document.querySelector(".all")
const complete = document.querySelector(".complete")
const uncomplete = document.querySelector(".uncomplete")
const todoArray = [];


elList.addEventListener("click" , evt => {

  if(evt.target.matches(".delete-item")){

    const btnId = (evt.target.dataset.todoId);
    const findIndexArr = todoArray.findIndex(todo => todo.id == btnId);
    todoArray.splice(findIndexArr, 1);

    renderTodos(todoArray , elList);

  }
  else if(evt.target.matches(".todo-checked")){
    const checkId = Number(evt.target.dataset.todoId);
    const findTodo = todoArray.find(todo => todo.id === checkId);
    findTodo.isComplate = !findTodo.isComplate;

    renderTodos(todoArray , elList);
  }
})


function renderTodos(arr , element){

  element.innerHTML = "";

  // all.textContent = arr.length;
  // complete.textContent = arr.filter(e => e.isComplate == true).length;
  // uncomplete.textContent = arr.filter(e => e.isComplate == false).length;

  const allResult = todoArray.length;
  const trueFilter = todoArray.filter(e => e.isComplate === true).length;

  all.textContent = allResult;
  complete.textContent = trueFilter;
  uncomplete.textContent = allResult - trueFilter;


  arr.forEach(todo => {

    const newItem = document.createElement("li");
    const newBtn = document.createElement("button");
    const inputCheck = document.createElement("input");

    newItem.textContent = todo.title;
    newBtn.textContent = "Delete";
    newBtn.classList.add("delete-item")
    newBtn.classList.add("btn-delete")
    newBtn.dataset.todoId = todo.id;

    inputCheck.type = "checkbox";
    inputCheck.dataset.todoId = todo.id;
    inputCheck.classList.add("todo-checked");
    inputCheck.classList.add("checkbox");

    if(todo.isComplate){
      inputCheck.checked = true;
      newItem.style.textDecoration = "line-through";
    }

    newItem.appendChild(inputCheck);
    newItem.appendChild(newBtn);
    element.appendChild(newItem);

  });

}

elForm.addEventListener("submit" , evt => {
  evt.preventDefault();

  const inputValue = elInput.value.trim();

  const todo = {
    id: todoArray.length > 0 ? todoArray[todoArray.length - 1].id + 1 : 0,
    title: inputValue,
    isComplate: false,
  }

  todoArray.push(todo);
  renderTodos(todoArray, elList);
  elInput.value = "";

})


btns.addEventListener("click", (evt) => {

if (evt.target.matches(".all-btn")){
  renderTodos(todoArray, elList)
}
if (evt.target.matches(".complete-btn")){
  const filteredCompletes = todoArray.filter(e => e.isComplate === true);
  renderTodos(filteredCompletes, elList);
}
if (evt.target.matches(".uncomplete-btn")){
  const filteredUnCompletes = todoArray.filter(e => e.isComplate === false);
  renderTodos(filteredUnCompletes, elList);
}

})
