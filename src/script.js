import sass from './css/main.scss';
import createCategory from './category';
import CreateTODO from './todo';
import DOM from './DOM';
import Storage from './storage';
import { todoForm, validateForm } from './todo';
import { categoryButtonFunction, clearInputFields } from './scriptFunctions';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'


const storage = Storage();
const domObject = DOM();
let CategoriesArray;

// Check if storage is populated
if (storage.check("main")) {
    
    CategoriesArray = storage.retrive("main");

    CategoriesArray.array.forEach(category => {
        domObject.addCategory(category.name);
        domObject.addListener(category);
    })

    domObject.display(CategoriesArray.array[0]);

} else {
    
    CategoriesArray = createCategory("CategoryArray")

    const Inbox = createCategory("Inbox")
    
    // Append Inbox Category and add it to the Categories Tab
    CategoriesArray.add(Inbox, CategoriesArray);
    domObject.addCategory(Inbox.name);
    domObject.addListener(Inbox);
    
    // Displaying Inbox as Main Category
    domObject.display(Inbox);    
    
    // Everything so far
    storage.save(CategoriesArray);

}

// Make the overlay disappear when clicked
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", (e) => {
    // checking to not add transparent when event was fired on child element
    if (e.target !== overlay) {
        return
    }
    overlay.classList.add("transparent");
})

const addCategoryButton = document.querySelector(".sidebar button.add");

addCategoryButton.addEventListener("click", () => {
    overlay.classList.remove("transparent");
    document.querySelector(".overlay .createCategory").classList.remove("transparent");
})

// Selecting submit newCategoryButton and add the logic to create a new Category
const submitNewCategoryButton = document.querySelector(".overlay button");

submitNewCategoryButton.addEventListener("click", () => {
    categoryButtonFunction(CategoriesArray, overlay, domObject);
})

// Selecting Submit Button which creates new Todo and add this todo to Category 
const submitNewTodoButton = document.querySelector(".overlayTwo .createTodo button");

submitNewTodoButton.addEventListener("click", (e) => {
    if (validateForm()) {
        // Selecting the category through the container Title
        const currentCategory = document.querySelector(".container>h3").textContent;
        
        const newTodo = todoForm(currentCategory);
        
        CategoriesArray.array.forEach(category => {
            if (category.name === currentCategory) {
                category.add(newTodo, CategoriesArray);
                domObject.display(category);
            }
        })
        
        // UI Relevent Aspects
        clearInputFields();
        const formForCreatingNewTodo = document.querySelector(".overlayTwo .createTodo");
        overlayTwo.classList.add("transparent");
    }
})

// Select Button to add a Todo and give it an eventlistener
const addTodoButton = document.querySelector(".main .add-todo");
const overlayTwo = document.querySelector(".overlayTwo");

overlayTwo.addEventListener("click", (e) => {
    if (e.target !== overlayTwo) {
        return 
    }
    overlayTwo.classList.add("transparent");
})

addTodoButton.addEventListener("click", () => {
    overlayTwo.classList.remove("transparent");
})