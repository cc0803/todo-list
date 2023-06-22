

export default function Storage() {
    return {
        save(mainObject) {
            saveData(mainObject);
        },
        retrive() {

        },
        check() {

        }
    }
}

function saveData(mainObject) {
    localStorage.setItem("main", JSON.stringify(mainObject));
}