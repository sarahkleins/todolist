// Each item should look like this:
// <li><span>Add grid to this app</span> <input type="checkbox" /></li>

//lessons learned
// - Avoid global variables
// - Strive to make functions reusable

function addNewItem(list){
	var listItem = document.createElement("li")
	listItem.innerText = "Hello";

	var list = document.getElementById("todoList");
	list.appendChild(listItem);
}
//creates an element to add to this list
//createElement takes a string of the element you want to create

function deleteNewItem(){
	//function that deletes Item from the DOM
}

function moveNewItem(){
	//function that moves item from column to column 
}

var newItem = document.getElementById("todoList");
//Reference to the new item

btnAdd.onclick = addNewItem;
//Create a function directly here
//Function with () calls the function immediately. Handler goes to addNewItem function. 
//to make sure this doesn't fire immediately, wrap it in an anonymouse function. 