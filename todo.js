//Avoid global variables, wrap this in an anon function?
(function(){
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var list = document.getElementById("list");

    //create variables here for localStorage to access?
    //var x = document.getElementById("delete")
    //var newItem = document.getElementById("...? [array];


    input.focus();

/*
var createButton = function() {
    var button = 
    document.createElement('button');
    button.innerHTML = "X";
    button.setAttribute("type", "button") 
    button.setAttribute("id", "delete");
    console.log(button);
};
*/

//Add new item
var createNewItem = function (){
    if (input.value !== ''){
       
    var newTask = document.createElement('li');
    var button = document.createElement('button');
    
    newTask.innerHTML = input.value;
    newTask.setAttribute("id", list.childNodes.length);
    newTask.addEventListener("click", deleteItem, false);
    list.appendChild(newTask);
   
    button.innerHTML = 'X';
    button.setAttribute("id", "delete");
    button.addEventListener("click", deleteItem, false);
    newTask.appendChild(button); 
     
    //Call localStorage here? Send in what we've just created newTask, button. It will use these values inside the localStorage function. How do I access a function within a function. Put it in global scope - how?
    
    //localStorage(newTask);

    
    input.value = ''
    input.focus();
    
    }
    //return newTask;
    //return button;
    
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

//localStorage - a reference to this function(event) goes inside createItem, with all the instructions outside?
//Example that helped me think about this

    /*function sayHello(who){
        documenwrite("Hello," + who);
    }  
    
    sayHello("Bob");
    */
    
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

