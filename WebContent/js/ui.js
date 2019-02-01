// UI Class
// function UI() {
//
// }

class UI {

    // Prototype
    //     UI.prototype.addMovieToUI = function (newMovie) {
    // // <tr>
    // //     <td><img src="" class="img-fluid img-thumbnail"></td>
    // //         <td></td>
    // //         <td></td>
    // //         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    // // </tr>
    //
    //         const movieList = document.getElementById("films");
    //
    //         movieList.innerHTML += `
    //         <tr>
    //             <td><img src="${newMovie.link}" class="img-fluid img-thumbnail"></td>
    //             <td>${newMovie.title}</td>
    //             <td>${newMovie.director}</td>
    //             <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
    //         </tr>
    //     `;
    //     }

    // ES6
    static addMovieToUI(newMovie) {
        // <tr>
        //     <td><img src="" class="img-fluid img-thumbnail"></td>
        //         <td></td>
        //         <td></td>
        //         <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
        // </tr>

        const movieList = document.getElementById("films");

        movieList.innerHTML += `
        <tr>
            <td><img src="${newMovie.link}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
        </tr>
    `;
    }


    // Prototype
    // UI.prototype.clearInputs = function (e1, e2, e3) {
    //     e1.value = "";
    //     e2.value = "";
    //     e3.value = "";
    //     e1.focus();
    // }

    // ES6
    static clearInputs(e1, e2, e3) {
        e1.value = "";
        e2.value = "";
        e3.value = "";
        e1.focus();
    }


    // Prototype
    // UI.prototype.displayMessages = function (message, type) {
    //     // Select div
    //     const cardBody = document.querySelector(".card-body");
    //
    //     // Create div element
    //     const div = document.createElement("div");
    //     div.className = `alert alert-${type}`;
    //     div.textContent = message;
    //
    //     // append div to element to card-body
    //     cardBody.appendChild(div);
    //
    //     // setTimeout -> delete appended div after 1 second.
    //     setTimeout(() => div.remove(), 1000);
    // }

    // ES6
    static displayMessages(message, type) {
        // Select div
        const cardBody = document.querySelector(".card-body");

        // Create div element
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        // append div to element to card-body
        cardBody.appendChild(div);

        // setTimeout -> delete appended div after 1 second.
        setTimeout(() => div.remove(), 1000);
    }


    // Prototype
    // UI.prototype.loadAllMovies = function (movies) {
    //     movies.forEach((movie) => this.addMovieToUI(movie));
    // }

    // ES6
    static loadAllMovies(movies) {
        movies.forEach((movie) => this.addMovieToUI(movie));
    }


    // Prototype
    // UI.prototype.deleteMovieFromUI = function (e) {
    //     e.parentElement.parentElement.remove();
    // }

    // ES6
    static deleteMovieFromUI(e) {
        e.parentElement.parentElement.remove();
    }


    // Prototype
    // UI.prototype.clearMoviesFromUI = function () {
    //     const movies = document.querySelector("#films");
    //
    //     // movies.innerHTML = "";   // slow
    //     while (movies.firstElementChild !== null) {
    //         movies.firstElementChild.remove();
    //     }
    // }

    // ES6
    static clearMoviesFromUI() {
        const movies = document.querySelector("#films");

        // movies.innerHTML = "";   // slow
        while (movies.firstElementChild !== null) {
            movies.firstElementChild.remove();
        }
    }
}