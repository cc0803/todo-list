import sass from './css/main.scss';
import createCategory from './category';
import CreateTODO from './todo';
import DOM from './DOM';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'


// Define DOM Object and Categories within CategoriesArray
const domObject = DOM();
const CategoriesArray = createCategory("CategoryArray");

// Create Inbox Category and append first todo
const Inbox = createCategory("Inbox")
Inbox.add(CreateTODO("dishes", "Clean the dishes", "02.02.2022", "low"))
// Append Inbox Category and add it to the Categories Tab
CategoriesArray.add(Inbox);
domObject.addCategory(Inbox.name);


const categoriesContainer = document.querySelectorAll(".sidebar section:last-of-type button");
categoriesContainer.forEach(category => {
    category.addEventListener("click", () => {
        domObject.display(category);
    })
})