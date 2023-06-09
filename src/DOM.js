function createTodoHTML(title, dueDate, priority) {
    let container = document.createElement("p");
    container.classList.add("todo");

    container.innerHTML = `
                    <input type="checkbox" name="${title}" id="check">
                    <span class="task">${title}</span>
                    <span class="spacer"></span>
                    <span class="priority ${priority}">${priority}</span>
                    <span class="due">${dueDate}</span>
                    `;
    return container;
}

function createCategoryHTML(name) {
    let button = document.createElement("button");
    let text = document.createElement("h4");
    text.textContent = name;

    button.appendChild(text);
    return button;
}

export function addCategoryHTML(name) {
    let html = createCategoryHTML(name);
    let section = document.querySelector(".sidebar section:last-of-type");
    section.appendChild(html);
} 