import { addCategoryHTML } from "./DOM.js";

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