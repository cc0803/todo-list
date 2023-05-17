import Todo from './todoObject.js';
import Category from './todoCategory.js';
import css from './styles.css';

let newTodo = Todo("clean", "clean the floor", new Date('August 11, 2023'), "house", "low");

console.log(newTodo.title);
console.log(newTodo.dueDate);

let newCategory = Category();
newCategory.add(newTodo);
newCategory.display();