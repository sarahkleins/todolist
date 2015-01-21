(function(){
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var list = document.getElementById("list");
    var remove = document.getElementById("delete");
    var todos = [];
    console.log(localStorage.getItem("items"));

    input.focus();


//Creates new item
var createNewItem = function (){
    if (input.value !== ''){
    var newTask = document.createElement('li');
    var deleteButton = document.createElement('button'); 
    var editButton = document.createElement('button');


    newTask.innerHTML = input.value;
    todos.push(input.value);
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


document.getElementById("submit").addEventListener('click', createNewItem);
document.getElementById("input").addEventListener('keypress', keyPress);
//document.getElementById("list").addEventListener('input', saveToDoItem);

}());



