(function(){
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var list = document.getElementById("list");
    var remove = document.getElementById("delete");
    var todos = [];

    input.focus();


//Creates new item
var createNewItem = function (){
    if (input.value !== ''){
    var newTask = document.createElement('li');
    var deleteButton = document.createElement('button'); 
    var editButton = document.createElement('button');


    newTask.innerHTML = input.value;
    //newTask.addEventListener("input", saveToDoItem, false);
    newTask.setAttribute("id", "listItem" + (list.childNodes.length +1));
    list.appendChild(newTask);

    saveToDoItem();

    editButton.innerHTML = '-';
    editButton.setAttribute("id", "edit");
    editButton.addEventListener("click", editItem, false);
    editButton.contentEditable = false;    
    newTask.appendChild(editButton);

    deleteButton.innerHTML = 'X';
    deleteButton.setAttribute("id", "delete");
    deleteButton.addEventListener("click", deleteItem, false);
    deleteButton.contentEditable = false;
    newTask.appendChild(deleteButton);

    input.value = '';
    input.focus();

    }

};

//Deletes item from list when clicked
var deleteItem = function(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    
    ul.removeChild(listItem);
    input.focus();
};

//Edits item when clicked
var editItem = function(){
    var editItem = this.parentNode;
    editItem.contentEditable = true;

    editItem.focus();

    };

//Creates newTask on keypress (Enter) as well as on click
var keyPress = function(event){
    var code = event.keyCode;
    
    if (code === 13){
        createNewItem();
    }
};

//Saves items to localStorage
var saveToDoItem = function(event){
   var todolist = list.querySelector('li');
   console.log(todolist);
   JSON.stringify(todolist);
   console.log(todolist);
};


// function saveTodoItem(createNewItem) {
//     if (localStorage) {
//         var key = "todo" + todoItem.id;
//         var item = JSON.stringify(todoItem);
//         localStorage.setItem(key, item);
//     }
//     else {
//         console.log("Error: you don't have localStorage!");
//     }
// }     


document.getElementById("submit").addEventListener('click', createNewItem);
document.getElementById("input").addEventListener('keypress', keyPress);
//document.getElementById("list").addEventListener('input', saveToDoItem);

}());



