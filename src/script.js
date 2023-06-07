import Todo from './todoObject.js';
import Category from './todoCategory.js';
// import css from './styles.css';
import sass from './css/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

let categories = []

let newTodo = Todo("clean", "clean the floor", new Date('August 11, 2023'), "house", "low");

console.log(newTodo.title);
console.log(newTodo.dueDate);

let newCategory = Category();
categories.push(newCategory);

newCategory.add(newTodo);