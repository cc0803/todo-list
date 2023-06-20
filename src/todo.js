export default function CreateTODO(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
}


// Variables needed for createTodo Form validation and later new todo creation
let title;
let description;
let date;
let priority;

function evaluateVariables() {
    title = document.querySelector("#title").value;
    description = document.querySelector("#description").value;
    date = document.querySelector("#dueDate").value;
    priority = document.querySelector("#priority").value;
}

export function todoForm(category) {
    if (validateForm()) {
        evaluateVariables();

        // create new Todo and return it 
        return CreateTODO(title, description, date, priority, category)
    }
}

export function validateForm() {
    evaluateVariables();
    if (title && description && date) {
        return true;
    } else {
        return false;
    }
}