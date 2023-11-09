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

/* ================================ Модифицирована задача с фильмами ================================== */

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// let i = 0
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//           (a != null && b != null && a != "" && b != "" && a.length <= 50) ?
//             personalMovieDB.movies[a] = b : i--;
//         i++;
// }

//       if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов")
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель")
//     } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман")
//     } else console.log("Произошла ошибка")

//     console.log(personalMovieDB)



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
    
/* ================================================================================================== */

// const name = prompt("как тебя зовут?", "")

// function hello(n) {
//     alert(`Привет, ${n}!`)
// }
// hello(name)


// const name = "Evgeniy"
// function sayHello(name) {
//     return `Привет, ${name}!`
// }
// console.log(sayHello(name))

// const num = 5
// function returnNeighboringNumbers(num) {
//     const arr = []
//     for (let i = 0; i < 3; i++) {
//         arr[i] = num + (i - 1)
//     }
//     return arr
// }
// console.log(returnNeighboringNumbers(num))

// const number = 5, iteration = 3

// function getMathResult(num, iter) {
//     if (num > 0) {
//         for (let i = 0; i < iter; i++) {
//             let x = + num
//             let result = x
//             result += "---"
//         }
//         return result
//     } else {
//         return num
//     }
// }
// console.log(getMathResult(number, iteration))

// const number = 7, iteration = 10

// function getMathResult(num, iter) {
//     if (num > 0) {
//         let result
//         let x
//         for (let i = 0; i < iter; i++) {
//             x = + num
//             result = x
//             result += "---"
//         }
//         return result
//     } else {
//         return num
//     }
    
// }
// console.log(getMathResult(number, iteration))

// const num = 5, iter = 7

// function getMathResult(num, iter) {
//     if (typeof(iter) === 'number' && iter > 0) {
        
//         let result = ''
//         for (let i = 1; i <= iter; i++) {
//             if (i === iter) {
//                 result += `${num * i}`
//             } else {
//                 result += `${num * i}---`
//             }
//         }
//         return result

//     } else return num
// }
// console.log(getMathResult(num, iter))

// const leng = 40

// function cube(leng) {
//     let result = ''
// for (let i = 1; i <= leng; i++) {
//     if (i === 1 || i === leng) {
//         for(let j = 1; j <= leng; j++) {
//             result += '*'
//         }
//         result += '\n'
//     } else {
//         for(let j = 1; j <= leng; j++) {
//             if (j === 1 || j === leng) {
//                 result += '*'
//             } else result += '-'
//         }
//         result += '\n'
//     }
// }
// return result
// }
// console.log(cube(leng))



let numberOfFilms

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")
}
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

    function rememberMyFilms() {
        for ( let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '')
            if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
                personalMovieDB.movies[a] = b
    
            } else {
                i--
            }
          }
    }

      rememberMyFilms()

    function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
    } else console.log("Произошла ошибка")
        }
        
    detectPersonalLevel()

    function showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log('Доступ разрешен')
            console.log(personalMovieDB)
        } else console.log('Обьект приватный, его нельзя отобразить.')
    }
    
    showMyDB()

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
        }
    }

    writeYourGenres()