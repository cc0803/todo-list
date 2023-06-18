import createCategory from './category';

export function findCategory(array, name) {
    array.forEach(category => {
        if (category.name === name) {
            console.log(array)
            console.log(name)
            return category
        }
    })
}

export function categoryButtonFunction(array, overlay, domObject) {

     // Get the name of the Category and create new Category with that name
     const categoryName = document.querySelector(".createCategory input").value;
     const newCategory = createCategory(categoryName);
     array.add(newCategory);
     
     //Add Category to UI
     domObject.addCategory(newCategory.name);
     domObject.addListener(newCategory);

     // Give Category EventListener
 
     // Clear the input field and make overlay transparent
     document.querySelector(".createCategory input").value = "";
     overlay.classList.add("transparent");
}