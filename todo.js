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
    var button = document.createElement('button');
    
    newTask.innerHTML = input.value;
    newTask.setAttribute("id", list.childNodes.length);
    //newTask.setAttribute("id", "listItem");
    newTask.addEventListener("click", deleteItem, false);
    //When using below, deleteItem, createNewItem, keyPress all come up with Cannot read property 'parentNode' of undefined
    //newTask.addEventListener("click", deleteItem());
    list.appendChild(newTask);
   
    button.innerHTML = 'X';
    button.setAttribute("id", "delete");
    button.addEventListener("click", deleteItem, false);
    newTask.appendChild(button);

    input.value = ''
    input.focus();

    }

};

//localStorage.setItem
//localStorage.getItem

//delete this node that's inside, find the node in the list with the ID that I know I have. Find out what the ID is, and then delete that from the list. Delete my parent element. 

//Delete item from list //Want to delete button element that's clicked and parent element <li>
var deleteItem = function(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    
    ul.removeChild(listItem);
    input.focus();
};

//Create New Item on keypress (Enter) as well as on click
var keyPress = function(event){
    var code = event.keyCode;
    
    if (code === 13){
        createNewItem();
    }
};


function saveTodoItem(createNewItem) {
    if (localStorage) {
        var key = "todo" + todoItem.id;
        var item = JSON.stringify(todoItem);
        localStorage.setItem(key, item);
    }
    else {
        console.log("Error: you don't have localStorage!");
    }
}     


document.getElementById("submit").addEventListener('click', createNewItem);
document.getElementById("input").addEventListener('keypress', keyPress);

}());
                       
                       
//Is the below needed? How does it work without it?
//document.getElementById("delete").addEventListener('click', deleteItem);

