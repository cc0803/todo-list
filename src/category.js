import { displayContent } from "./DOM.js";

/* Object that saves all categories and can search 
for a specific category and return this category */
const Categories = () => {
    var someCategories = Object.create(categoryArray());

    display = displayContent(this.array);
}

const categoryArray = () => {
    this.array = [];

    let add = append(element, category = this)
}

const createCategory = (name) => {
    this.name = name,
    this.array = [],

    this.add = function add(element){
        append(element, this)
    }
}

export function append(element, category) {
    // category.array because every array inside Object is named array;
    category.array.push(element);
}