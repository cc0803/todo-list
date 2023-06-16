import { CategoriesArray } from "./script";

export function findCategory(array, name) {
    array.forEach(category => {
        console.log(category)
        if (category.name === name) {
            return category
        }
    })
}