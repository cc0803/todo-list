import Category from "./todoCategory";

function deleteObject() {
    const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("checked", () => {
            setTimeout(detectDeletedObject(e.currentTarget, e.currentTarget.category), 1000)
        })
    })
}

function detectDeletedObject(target, category) {
    for (var cat in CategoryArray) {
        if (cat === category) {
            for (let i = 0; i < cat.todos.length; i++) {
                if (cat.todos[i] === target) {
                    cat.todos.splice(i, 1);
                }
            }
        }
    }
}

const DOMObject = () => {
    const displayTodos = display(category)
}

function createTodoHtml(title, description, dueDate, Category, priority) {
    
    const paragraph = document.createElement("p")
    paragraph.classList.add("todo");
    
    paragraph.innerHTML = `<input type="checkbox" name="check" id="check">
    <span class="task">${title}</span>
    <span class="spacer"></span>
    <span class="priority low">${priority}</span>
    <span class="due">${dueDate}</span>`

    return paragraph;
}

// Function that creates the html for a new Category
function createCategory(name) {
    const button = document.createElement("button");
    const text = document.createElement("h4");

    text.textContent = name;

    button.appendChild(text);

    return button;
}

function appendCategory(category) {
    const section = document.querySelector("nav.sidebar section:last-of-type");
    section.appendChild(category);
}
