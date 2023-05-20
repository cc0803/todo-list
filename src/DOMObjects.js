function deleteObject() {
    const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("checked", () => {
            setTimeout(detectDeletedObject())
        })
    })
}

function detectDeletedObject(category, categoryArray) {
    categoryArray.forEach(cat => {
        if (cat === category) {
            for (let i = 0; i < cat.todos.length(); i++) {
                if (cat.todos[i].classList.contains("checked")) {
                    cat.todos.splice(i, 1);
                }
            }
        }
    })
}

const DOMObject = () {
        
    const displayTodos = display(category)

}

function display(category) {
    
}