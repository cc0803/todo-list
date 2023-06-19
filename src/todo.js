export default function CreateTODO(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
}


// Variables needed for createTodo Form validation and later new todo creation
let form;
let title;
let description;
let date;

function evaluateVariables() {
    form = document.querySelector(".overlay .createTodo form");
    title = form.querySelector("input[name='title']").value;
    description = form.querySelector("input[name='description']").value;
    date = form.querySelector("input[name='date']").value;
}

export function todoForm() {
    if (validateForm()) {
        evaluateVariables();
        console.log(date);
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