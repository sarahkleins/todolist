(function(){
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var list = document.getElementById("list");
    var remove = document.getElementById("delete");
    var todos = [];
    console.log(localStorage.getItem("items"));

    input.focus();

//if (input.value !== ''){}

var createNewItemFromInput = function(){
    if (input.value !== ''){
        createNewItem(input.value);
        saveToDoItem(todos);
    }
}

//Creates new item
var createNewItem = function (textContent){
    var newTask = document.createElement('li');
    var span = document.createElement('span');
    var deleteButton = document.createElement('button'); 
    var editButton = document.createElement('button');


    //newTask.innerHTML = input.value;
    //todos.push(input.value);
    span.innerHTML = textContent;
    newTask.appendChild(span);

    todos.push(textContent);
    console.log(todos);

    //newTask.addEventListener("input", saveToDoItem, false);
    newTask.setAttribute("id", "listItem" + (list.childNodes.length +1));
    list.appendChild(newTask);

    //console.log(saveToDoItem(todos));

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

};

//Deletes item from list when clicked
var deleteItem = function(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    var span = listItem.firstChild;
    var removeItem = span.textContent;

    var index = todos.indexOf(removeItem);
    todos.splice(index, 1)
    //if it was 2 it would take both

    //resave to localStorage

    saveToDoItem(todos);

    //todos[removeItem];
    //get value of parent
    //pop out of todo list
    //saveToDoItem

    ul.removeChild(listItem);
    input.focus();
};

//Edits item when clicked
var editItem = function(){
    var editItem = this.parentNode;
    editItem.contentEditable = true;

    //find solution! very similar, index replacing etc

    editItem.focus();

    };

//Creates newTask on keypress (Enter) as well as on click
var keyPress = function(event){
    var code = event.keyCode;
    
    if (code === 13){
        createNewItemFromInput();
    }
};

//Saves items to localStorage

var saveToDoItem = function(todos){
    //for (var i = 0; i < todos.length; i++){
        //console.log(todos[i]);
    //}
   //var todolist = list.querySelector('li');
   //console.log(toDoList);
   localStorage.setItem("items",JSON.stringify(todos));

   //Out of JSON string and into list
   //Logs to localStorage, but doesn't print to screen
   //console.log(toDoList);
};

//Load to do items from localStorage
var loadToDoItems = function(){

    var notes = JSON.parse(localStorage.getItem("items"));
    //for(todo in notes) {
        //createNewItem(todos[i]);
    //}
    for (var i = 0; i < notes.length; i++){
        createNewItem(notes[i]);
    }
}

//Edit or Update call Save todoitems

loadToDoItems();


document.getElementById("submit").addEventListener('click', createNewItemFromInput);
document.getElementById("input").addEventListener('keypress', keyPress);
//document.getElementById("list").addEventListener('input', saveToDoItem);

}());



