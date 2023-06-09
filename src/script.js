import sass from './css/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

let categories = document.querySelectorAll(".sidebar section:last-of-type button");

categories.forEach(category => {
    category.addEventListener("click", () => {
        console.log("Hello World");
    })
})