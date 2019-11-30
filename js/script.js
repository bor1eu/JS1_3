// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
function task1 () {
    let isSimple = false;
    let k = 0;
    for (let i = 1; i <= 100; i++) {
        isSimple = true;
        k = 2
        while (isSimple && (k < i)) {
            isSimple = !(i % k++ == 0)
        }
        if (isSimple) {
            console.log (i)
        }
    }
}

//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
function task4 () {
    for (let i = 0; i <= 9; console.log(i++)) {}
}

// 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5
function task5 () {
    let a = ""
    for (let i = 1; i <= 20; i++) {
        a = a + "x"
        console.log (a)
    }
}

// 5) ** Реализовать игру "Камень, ножницы...." через цикл while И через рекурсию с возможностью прекращения игры
function task6 () {
    let user = 0
    while (user != 3) {
        user = +prompt ("Камень = 0, Ножницы = 1, Бумага = 2, Конец игры = 3")
        if (user != 3) {
            round (user)
        }
    }
}

function round (user) {
    let comp = getPC ()
    //console.log ('Пользователь выбрал ' + user)
    if ((user === 0 && comp === 1) || (user === 1 && comp === 2) || (user === 2 && comp === 0)) {
        console.log ('Пользователь победил! ' + translate (user) + '; ' + translate (comp))
    } else if (comp === user) {
        console.log ('Ничья')
    } else {
        console.log ('Пользователь проиграл! ' + translate (user) + '; ' + translate (comp))
    }
}

function getPC () {
    return Math.floor (Math.random () * 3) // [0 - 2]
}

function translate (ch) {
    return ch === 0 ? 'Камень' : (ch === 1 ? 'Ножницы' : 'Бумага')
}

function task7 () {
    let user = +prompt ("Камень = 0, Ножницы = 1, Бумага = 2, Конец игры = 3")
    if (user != 3) {
        round (user)
        task7 ()
    }
}