const Category = () => {
    let todos = [];

    const add = (todo) => {
        todos.push(todo);
    }

    const display = () => {
        todos.forEach(todo => console.log(todo));
    }

    const remove = (list, todo) => {
        todos = findTodo(list, todo);
    }
    
    return {add, display};
}

export default Category;

function findTodo(list, todo) {
    for (let i = 0; i < list.length(); i++) {
        if (list[i] === todo) {
            list.splice(i, 1);
        }
    }
    return list;
}