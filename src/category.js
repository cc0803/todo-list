export default function createCategory(name) {
    this.name = name,
    this.array = [],

    add = function (element){
        append(element, this)
    }
}

export function append(element, category) {
    // category.array because every array inside Object is named array;
    category.array.push(element);
}