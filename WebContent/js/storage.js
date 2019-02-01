// function Storage() {
//
// }

class Storage {
    // Prototype
    // Storage.prototype.addMovieToLocalStorage = function (newMovie) {
    //     let movies = this.getMoviesFromLocalStorage();
    //     movies.push(newMovie);
    //     localStorage.setItem("movies", JSON.stringify(movies));
    // }

    // ES6
    static addMovieToLocalStorage (newMovie) {
        let movies = Storage.getMoviesFromLocalStorage();
        movies.push(newMovie);
        localStorage.setItem("movies", JSON.stringify(movies));
    }



    // Prototype
    // Storage.prototype.getMoviesFromLocalStorage = function () {
    //     let movies;
    //
    //     if (localStorage.getItem("movies") === null)
    //         movies = [];
    //     else {
    //         movies = JSON.parse(localStorage.getItem("movies"));
    //     }
    //     return movies;
    // }

    // ES6
    static getMoviesFromLocalStorage () {
        let movies;

        if (localStorage.getItem("movies") === null)
            movies = [];
        else {
            movies = JSON.parse(localStorage.getItem("movies"));
        }
        return movies;
    }



    // Prototype
    // Storage.prototype.deleteMovieFromLocalStorage = function (title) {
    //     let movies = this.getMoviesFromLocalStorage();
    //
    //     movies.forEach((movie, index) => {
    //         if(movie.title === title){
    //             movies.splice(index, 1);
    //         }
    //     });
    //     localStorage.setItem("movies", JSON.stringify(movies));
    // }

    // ES6
    static deleteMovieFromLocalStorage (title) {
        let movies = Storage.getMoviesFromLocalStorage();

        movies.forEach((movie, index) => {
            if(movie.title === title){
                movies.splice(index, 1);
            }
        });
        localStorage.setItem("movies", JSON.stringify(movies));
    }



    // Prototype
    // Storage.prototype.clearAllMoviesFromLocalStorage = function () {
    //     localStorage.removeItem("movies");
    // }

    // ES6
    static clearAllMoviesFromLocalStorage () {
        localStorage.removeItem("movies");
    }



    // Prototype
    // Storage.prototype.checkMovieEquality = function (newMovie) {
    //     let movies = this.getMoviesFromLocalStorage();
    //     let result;
    //
    //     movies.forEach(movie => {
    //         if (movie.title === newMovie.title)
    //             result = true;
    //     });
    //
    //     return result;
    // }

    // ES6
    static checkMovieEquality (newMovie) {
        let movies = Storage.getMoviesFromLocalStorage();
        let result;

        movies.forEach(movie => {
            if (movie.title === newMovie.title)
                result = true;
        });

        return result;
    }
}









