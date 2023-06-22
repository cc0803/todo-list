import Storage from "./storage";
const storage = Storage();

export default function CreateCategory(name) {

    return {
        array: [],
        name,
        add(element, CategoriesArray) {
            append(element, this);
            storage.save(CategoriesArray);
        },
    }
}

export function append(element, category) {
    // category.array because every array inside Object is named array;
    category.array.push(element);
}