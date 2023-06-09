const categoryArray = () => {
    this.array = [];

    let add = append(element, category = this)
}

const createCategory = (name) => {
    this.name = name,
    this.array = [],

    let add = append(element, category = this);
}

export function append(element, category) {
    // category.array because every array inside Object is named array;
    category.array.push(element);
}