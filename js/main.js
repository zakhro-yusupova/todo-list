var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormList = document.querySelector(".form__list");
var todoArray = [];

elForm.addEventListener("submit", function(evt){

  evt.preventDefault();
  var inputVal = elFormInput.value.trim();
  var todo = {
    id: todoArray.length,
    title: inputVal
  }

  todoArray.push(todo);
  elFormList.innerHTML = "";

  for (var item of todoArray){
    var newItem = document.createElement("li");
    newItem.textContent = item.id + 1 + ". " + item.title;
    elFormList.appendChild(newItem);

    elFormInput.value = "";
  }


});
