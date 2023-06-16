import { CategoriesArray } from "./script";

export function findCategory(name) {
    CategoriesArray.array.forEach(category => {
        if (category.name === name) {
            console.log(category);
            return category;
        }
    })
}