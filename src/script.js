import sass from './css/main.scss';
import createCategory from './category';
import createTODO from './todo';
import DOM from './DOM';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'


// Define DOM Object and Categories within CategoriesArray
const domObject = DOM();
const CategoriesArray = createCategory("CategoryArray");

// CategoriesArray append default Inbox Category
CategoriesArray.append(createCategory("Inbox"));

const categoriesContainer = document.querySelectorAll(".sidebar section:last-of-type button");

categoriesContainer.forEach(category => {
    category.addEventListener("click", () => {

    })
})