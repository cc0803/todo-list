import { CategoriesArray } from "./script";

export function findCategory(array, name) {
    array.forEach(category => {
        if (category.name === name) {
            console.log(array)
            console.log(name)
            return category
        }
    })
}