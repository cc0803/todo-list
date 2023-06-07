const Category = (name) => {
    name = this.name;
    let todos = [];

    const add = (todo) => {
        todos.push(todo);
    }

    const remove = (list, todo) => {
        todos = findTodo(list, todo);
    }
    
    return {add, remove};
}

// Find the todo, by searching the right category
function findTodo(category, todo) {
    for (let i = 0; i < category.length(); i++) {
        if (category[i] === category) {
            list.splice(i, 1);
        }
    }
    return list;
}

export default Category;