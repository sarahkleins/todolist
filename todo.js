(function(){
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var list = document.getElementById("list");
    var remove = document.getElementById("delete");
    var todos = [];
    console.log(localStorage.getItem("items"));

    input.focus();


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


    span.innerHTML = textContent;
    newTask.appendChild(span);

    todos.push(textContent);
    console.log(todos);
 
    newTask.setAttribute("id", "listItem" + (list.childNodes.length +1));
    list.appendChild(newTask);


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

    //indexOf finds the index of removeItem in the todos array. The splice method removes the item. Second parameter is the number of elements that will be removed.
    var index = todos.indexOf(removeItem);
    todos.splice(index, 1)


    //resave to localStorage
    saveToDoItem(todos);

    //remove from the DOM
    ul.removeChild(listItem);
    input.focus();
};

//Edits item when clicked
var editItem = function(){
    var editItem = this.parentNode;
    var span = editItem.firstChild;
    span.contentEditable = true;

    span.focus();

    span.addEventListener("blur", saveEditedItem, true);

    };

//Saves editedItem to the todos array.
var saveEditedItem = function(){
    var editedItem = this.textContent;

    var index = todos.indexOf(editedItem);
    todos.splice(index, 1)
    todos.push(editedItem);

    saveToDoItem(todos);
}

//Creates newTask on keypress (Enter) as well as on click
var keyPress = function(event){
    var code = event.keyCode;
    
    if (code === 13){
        createNewItemFromInput();
    }
};

//Saves items to localStorage
var saveToDoItem = function(todos){
   localStorage.setItem("items",JSON.stringify(todos));

};

//Load to do items from localStorage
var loadToDoItems = function(){

    var notes = JSON.parse(localStorage.getItem("items"));

    for (var i = 0; i < notes.length; i++){
        createNewItem(notes[i]);
    }
}


loadToDoItems();


document.getElementById("submit").addEventListener('click', createNewItemFromInput);
document.getElementById("input").addEventListener('keypress', keyPress);

}());



