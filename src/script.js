import sass from './css/main.scss';
import createCategory from './category';
import CreateTODO from './todo';
import DOM from './DOM';
import { todoForm, validateForm } from './todo';
import { findCategory, categoryButtonFunction} from './scriptFunctions';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'


// Define DOM Object and Categories within CategoriesArray
const domObject = DOM();
const CategoriesArray = createCategory("CategoryArray");

// Create Inbox Category and append first todo
const Inbox = createCategory("Inbox")
Inbox.add(CreateTODO("dishes", "Clean the dishes", "02.02.2022", "low"))
Inbox.add(CreateTODO("bathroom", "Clean the bathroom", "12.12.2023", "high"))

// Append Inbox Category and add it to the Categories Tab
CategoriesArray.add(Inbox);
domObject.addCategory(Inbox.name);
domObject.addListener(Inbox);

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
        todoForm();
        const formForCreatingNewTodo = document.querySelector(".overlayTwo .createTodo");
        formForCreatingNewTodo.classList.add("transparent")
        overlay.classList.add("transparent");
    }
})
