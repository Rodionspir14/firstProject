const numberOfFilms = prompt('Сколько фильмов вы уже посмотрел?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {

    },
    genres: [],
    privat: false
}

const film = prompt('Один из последних просмотренных фильмов?'),
    rating = prompt('На сколько оцените его?');

personalMovieDB.movies[film] = rating;
console.log(personalMovieDB)