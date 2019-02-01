const form = document.querySelector("#film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearMovies = document.querySelector("#clear-films");

// Init UI Object
// const ui = new UI();

// Init Storage Object
// const storage = new Storage();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", () => {
        let movies = Storage.getMoviesFromLocalStorage();
        UI.loadAllMovies(movies);
    });
    cardBody.addEventListener("click", deleteMovie);
    clearMovies.addEventListener("click", clearAllMovies);
}

function addMovie(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Error
        UI.displayMessages("Inputs cannot be empty!", "danger");
    } else {
        // New movie
        const newMovie = new Movie(title, director, url);

        // Check movie equality
        if (!Storage.checkMovieEquality(newMovie)){
            // Add Movie to UI
            UI.addMovieToUI(newMovie);

            // Clear all inputs
            UI.clearInputs(titleElement, directorElement, urlElement);

            // Add Movie to LocalStorage
            Storage.addMovieToLocalStorage(newMovie);

            // Show Success message
            UI.displayMessages("Movie has been added!", "success");
        } else
            UI.displayMessages("Movie name must be unique!", "danger");
    }


    // Prevent Submit
    e.preventDefault();
}

function deleteMovie(e) {
    if (e.target.id === "delete-film"){
        UI.deleteMovieFromUI(e.target);
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        Storage.deleteMovieFromLocalStorage(title);

        UI.displayMessages(`${title} has been deleted!`, "success");

    }

}

function clearAllMovies() {
    if (confirm("Would you like to delete all movies?")){
        UI.clearMoviesFromUI();
        Storage.clearAllMoviesFromLocalStorage();
    }
}