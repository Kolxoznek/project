// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [],
//     privat: false
// }

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '')

//     personalMovieDB.movies[a] = b
//     personalMovieDB.movies[c] = d

//     console.log(personalMovieDB)

   


    // for (let i = 5; i < 11; i++) {
    //     console.log(i)
    // };

    // for (let i = 20; i > 10; i--) {
    //     console.log(i);
    //     if (i == 13) break;
    // };

    // for (let i = 2; i < 11; i++) {
    //     if (i % 2 == 0) { console.log(i); }
    // };

    // let i = 2;
    // while (i < 17) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else { console.log(i); }
    //     i++;
    // };

    // const arr = [];
    // for (let i = 0; i < 6; i++) {
    //     let j = 5;
    //     arr[i] = i + j;
    // };


    // for (let i = 5; i < 11; i++) {
    //     console.log(i);
    // }

    // for (let i = 20; i > 10; i--) {
    //     console.log(i);
    //     if (i == 13) break;
    // }

    // for (let i = 2; i < 11; i++) {
    //     if (i % 2 === 0) console.log(i);
    // }

    // let i = 2;
    // while (i < 17) {
    //     if (i % 2 === 0) {
            
    //         continue;
    //     } else {
    //         i++;
    //         console.log(i);
    //     }
    // }

    // const arr = [];
    // for (let i = 0; i < 6; i++) {
    //     let j = 5;
    //     arr[i] = i + j;
    // }


    // function firstTask() {
    //     const arr = [3, 5, 8, 16, 20, 23, 50]
    //     const result = []
    //     for( let i = 0; i < arr.length; i++) {
    //         result[i] = arr[i]
    //     }
    //     return result
    // }
    // firstTask()
    
    // function secondTask() {
    //     const arr = [5, 10, 'Shopping', 20, 'Homework']
    //     const result = []
    //     for( let i = 0; i < arr.length; i++) {
    //         result[i] = arr[i]
    //         if (typeof arr[i] === "number") {
    //             result[i] = arr[i] * 2
    //         } else {
    //             result[i] = arr[i] + ' - done'
    //         }
    //     }
    //     console.log(result)
    //     return result
    // }
    // secondTask()

    // function thirdTask() {
    //     const data = [5, 10, 'Shopping', 20, 'Homework']
    //     const result = []

    //     for( let i = 1; i <= data.length; i++) {
    //         result[i - 1] = data[data.length - i]
    //     }
    //     console.log(result)
    //     return result
    // }
    // thirdTask()
    

    /* ======================= вывод пирамиды из звездочек в консоль ======================= */

    // function figure() {
    //     const star = '*'
    //     const space = ' '
    //     const newLine = '/n'
    //     let result = ''
    //     const lines = 6

    //     for (let i = 0; i < lines; i++) {
    //         let j = lines - i - 1;
            
    //     }
    // }
    // figure()


// let result = ''
//     const count = 5

//     for (let i = 0; i <= count; i++) {
//         for (let j = 0; j < count - i; j++) {
//             result += " "
//         }
//         for (let k = 0; k < 2 * i + 1; k++) {
//             result += "*"
//         }
//         result += "\n"
//     }
//     console.log(result)

/* ============================================================================================ */

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let i = 0
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          
          (a != null && b != null && a != "" && b != "" && a.length <= 50) ?
            personalMovieDB.movies[a] = b : i--;
        i++;
}

      if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
    } else console.log("Произошла ошибка")

    console.log(personalMovieDB)



    // for ( let i = 0; i < 2; i++) {
    //     const a = prompt('Один из последних просмотренных фильмов?', ''),
    //           b = prompt('На сколько оцените его?', '')
    //     if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
    //         personalMovieDB.movies[a] = b

    //     } else {
    //         i--
    //     }
    //   }

    // let i = 0
    // while (i < 2) {
    //     const a = prompt('Один из последних просмотренных фильмов?', ''),
    //           b = prompt('На сколько оцените его?', '')
    //           if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
    //             personalMovieDB.movies[a] = b
    
    //         } else {
    //             i--
    //         }
    //         i++
    // }
    
