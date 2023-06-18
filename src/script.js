import sass from './css/main.scss';
import createCategory from './category';
import CreateTODO from './todo';
import DOM from './DOM';
import { findCategory, categoryButtonFunction } from './scriptFunctions';
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


const categoriesContainer = document.querySelectorAll(".sidebar section:last-of-type button");
categoriesContainer.forEach(category => {
    category.addEventListener("click", () => {
        /* Getting the text content of category because it
        is the html button which has an h4 heading as a 
        child. So the textContent is selected and parsed in
        as an argument, because it is equal to the name property of the object */
        const name = category.textContent;
        let categoryToParse;

        /* Function that finds the category (cat) inside the CategoriesArray
        which matches the name of the one that was clicked */
        CategoriesArray.array.forEach(cat => {
            if (cat.name === name) {
                categoryToParse = cat;
            }
        })
        domObject.display(categoryToParse);
    })
})

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
})

// Selecting submit newCategoryButton and add the logic to create a new Category
const submitNewCategoryButton = document.querySelector(".overlay button");

submitNewCategoryButton.addEventListener("click", () => {
    categoryButtonFunction(CategoriesArray, overlay, domObject);
})