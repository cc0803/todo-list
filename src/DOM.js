export default function DOM() {
    log = (text) => {
        console.log(text);
    }
    display = (category) => {
        displayContent(category)
    }

    update = (category) => {
        removeContent();
        displayTodos(category)
    }
    return {display, update, log};
}

/* Function for creating the html 
for every single todo task*/ 
function createTodoHTML(todo) {
    let container = document.createElement("p");
    container.classList.add("todo");

    container.innerHTML = `
                    <input type="checkbox" name="${todo.title}" id="check">
                    <span class="task">${todo.title}</span>
                    <span class="spacer"></span>
                    <span class="priority ${todo.priority}">${todo.priority}</span>
                    <span class="due">${todo.dueDate}</span>
                    `;
    return container;
}

/* 
--createCategoryHTML creates the HTML for the single
Category button
-- addCategoryHTML appends this html to the category section
*/

function createCategoryHTML(name) {
    let button = document.createElement("button");
    let text = document.createElement("h4");
    text.textContent = name;

    button.appendChild(text);
    return button;
}

function addCategoryHTML(name) {
    let html = createCategoryHTML(name);
    let section = document.querySelector(".sidebar section:last-of-type");
    section.appendChild(html);
} 

// Selecting the todo tasks Container
const todoContainer = document.querySelector(".todo-container")

function removeContent() {
    todoContainer.innerHTML = "";
}

function displayTodos(category) {
    category.array.forEach(element => {
        todoContainer.appendChild(createTodoHTML(category));
    })
}   

function changeTodoContainerHeading(category) {
    const heading = document.querySelector(".container>h3");
    heading.textContent = category.name;
}

/* displays all of the Category content and its 
nodes inside the big todo-container in the center
of the application.*/
function displayContent(category) {
    removeContent();
    changeTodoContainerHeading(category);
    displayTodos(category);
}