export default function CreateCategory(name) {

    return {
        array: [],
        name,
        add(element) {
            append(element, this)
        },
    }
}

export function append(element, category) {
    // category.array because every array inside Object is named array;
    category.array.push(element);
}