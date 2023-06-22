export default function Storage() {
    return {
        save(mainObject) {
            saveData(mainObject);
        },
        retrive(key) {
            return JSON.parse(localStorage.getItem(key));
        },
        check(key) {
            if (localStorage.getItem(key)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function saveData(mainObject) {
    localStorage.setItem("main", JSON.stringify(mainObject));
}