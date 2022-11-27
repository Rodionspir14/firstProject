let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Пожалуйста введите сколько фильмов вы уже посмотрели!');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {

    },
    genres: [],
    privat: false
}

let film = prompt('Один из последних просмотренных фильмов?');

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        while(!film || film.length > 50) {
            film = prompt('Введите фильм который вы уже посмотрели!')
        }
    
        const rating = prompt('На сколько оцените его?');
        personalMovieDB.movies[film] = rating;
        console.log(i)
        if ((i + 1) != 2) {
            film = prompt('Какие еще фильмы вы смотрели?')
        } else {
            break
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Просмотренно довольно мало фильмов')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман')
    } else {
        alert('Прозошла ошибка')
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        let filmGenre = prompt(`Ваш любимый жанр фильма под номером ${3-i}`);
        while(!filmGenre) {
            filmGenre = prompt(`Ваш любимый жанр фильма под номером ${3-i}`);
        }
        personalMovieDB.genres.push(filmGenre);
    }
}
writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}
showMyDB();