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

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов')
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман')
} else {
    alert('Прозошла ошибка')
}
let film = prompt('Один из последних просмотренных фильмов?');
for(let i = 0; i < personalMovieDB.count; i++) {
    while(!film || film.length > 50) {
        film = prompt('Введите фильм который вы уже посмотрели!')
    }

    const rating = prompt('На сколько оцените его?');
    personalMovieDB.movies[film] = rating;
    console.log(i)
    if ((i + 1) != personalMovieDB.count) {
        film = prompt('Какие еще фильмы вы смотрели?')
    } else {
        break
    }
}
console.log(personalMovieDB)