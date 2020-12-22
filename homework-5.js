/*HOME WORK 5*/

'use strict';

    //1. Напишіть функцію, що повертає куб числа.


        function calcCube(num) {
            return Math.pow(num, 3);
        }
        console.log(calcCube(3));

    //2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

        let numArr = [5, 10, 3];
        function calcNum() {
            return (numArr[0] + numArr[1])/numArr[2];
        }
        console.log(calcNum());

    //3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

        let weekday = ['Понеділок',
               'Вівторок',
               'Середа',
               'Четвер',
               'П\'ятниця',
               'Субота',
               'Неділя'];
           
        function dayOfWeek(n) {
            return weekday[n] || 'Введіть число від 0 до 6';
        }

        console.log(dayOfWeek(0));

    //4. Реалізуйте функцію знаходження факторіала

        function factorial(num) {
            if (num === 0 || num === 1)
                return 1;
            for (let i = num - 1; i >= 1; i--) {
                num *= i;
            }
            return num;
        }
        console.log(factorial(6));

    //5. Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

        function timeInSec(){
            let currDate = new Date();
            let getHours = currDate.getHours();
            let getMinutes = currDate.getMinutes();
            let getSeconds = currDate.getSeconds();
            
            return (getHours * 3600 + getMinutes * 60 + getSeconds);
        }
        console.log(timeInSec());
        
    //6.Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

        function secToTime(inputSeconds){
            let hours = Math.floor(inputSeconds / 3600).toString().padStart(2,'0'),
                minutes = Math.floor(inputSeconds % 3600 / 60).toString().padStart(2,'0'),
                seconds = Math.floor(inputSeconds % 60).toString().padStart(2,'0');
            if (hours <= 23) {
            return hours + ':' + minutes + ':' + seconds;
            } else {
                return 'Більше одного дня';
            }
        }

        console.log(secToTime(86399));
        
        
        
        