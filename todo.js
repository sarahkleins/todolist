//Avoid global variables, wrap this in an anon function?
(function(){
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var list = document.getElementById("list");
    var remove = document.getElementById("delete");

        input.focus();


//Add new item
var createNewItem = function (){
    if (input.value !== ''){
    var newTask = document.createElement('li');
    var deleteButton = document.createElement('button'); 
    var editButton = document.createElement('button');


    newTask.innerHTML = input.value;
    newTask.setAttribute("id", "listItem" + (list.childNodes.length +1));
    list.appendChild(newTask);

    editButton.innerHTML = '-';
    editButton.setAttribute("id", "edit");
    editButton.addEventListener("click", editItem, false);    
    newTask.appendChild(editButton);


    deleteButton.innerHTML = 'X';
    deleteButton.setAttribute("id", "delete");
    deleteButton.addEventListener("click", deleteItem, false);
    newTask.appendChild(deleteButton);

    input.value = ''
    input.focus();

    }

};


//Deletes item from list
var deleteItem = function(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    
    ul.removeChild(listItem);
    input.focus();
};

var editItem = function(){
    var editItem = this.parentNode;
    //var ul = editItem.parentNode;

    editItem.contentEditable = true;
    //ul.contentEditable = true;
    editItem.focus();
    
    };


//Creates newTask on keypress (Enter) as well as on click
var keyPress = function(event){
    var code = event.keyCode;
    
    if (code === 13){
        createNewItem();
    }
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

}());
                       
                       
//Is the below needed? How does it work without it? Questions that need answering - Gandalf the Grey. 
//document.getElementById("delete").addEventListener('click', deleteItem);

