import sass from './css/main.scss';
import createCategory from './category';
import createTODO from './todo';
import DOM from './DOM';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

const domObject = DOM();
domObject.log("HEllo all fo to");
let categoriesContainer = document.querySelectorAll(".sidebar section:last-of-type button");

categoriesContainer.forEach(category => {
    category.addEventListener("click", () => {

    })
})