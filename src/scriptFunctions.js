import createCategory from './category';

export function categoryButtonFunction(array, overlay, domObject) {
     // Get the name of the Category and create new Category with that name
     const categoryName = document.querySelector(".createCategory input").value;
     const newCategory = createCategory(categoryName);
     array.add(newCategory, array);
     
     //Add Category to UI
     domObject.addCategory(newCategory.name);
     domObject.addListener(newCategory);    

     // Give Category EventListener
 
     // Clear the input field and make overlay transparent
    clearInputFields()
     overlay.classList.add("transparent");
}

export function clearInputFields() {
    const elements = document.querySelectorAll(".createForm input");

    elements.forEach(element => {
        element.value = "";
    })
}