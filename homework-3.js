//1.  Знайдіть суму всіх цифр від 1 до 100.
        var sum = 0;
        for (var i = 0; i <= 100; i++) {
            sum += i;
            }
        console.log(sum);
          
        
    //2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
        
        const array = [1, 2, 3, 4, 5];
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
        
        
    //3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
        var arr = [-1, 22, 3, 44, 5];
        var max = Math.max(...arr);
        console.log(max);
        

    //4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також достатньо тільки 1 змінної для отримання даних від юзера.
      
        let userInput = prompt('Enter 8 numbers separated by comma');
        const arrString = userInput.split(',');
        const arrNumber = arrString.map((i) => Number(i))        

        function numCount(arrNumber) {
            let count = [0,0,0];
          arrNumber.forEach(function(a) {
            if (a < 0)
              count[0]++;
            else if (a > 0)
              count[2]++;
            else
              count[1]++;
          });
            return count;
        }
        
        let result = numCount(arrNumber);
        alert('You have entered ' + result[2] + ' positive numbers, ' + result[0] + ' negative numbers and ' + result[1] + ' zeroes!');
        

    //5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
                
        document.write("<table>");
        for (var a = 1; a < 11; a++) {
          document.write("<tr>");
          for (var b = 1; b < 11; b++) {
            document.write("<td>" + a * b + "</td>");
          }
          document.write("</tr>");
        }
        document.write("</table>");
  
    
    //6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.
        
        let initial = [2, 5, 9, 15, 0, 4];
        let output = [];
        for (let i = 0; i < initial.length; i++) {
            if( 3 < initial[i] && initial[i] < 10) {
                output.push(initial[i]);
            } else {
                ;
            }
        }
        console.log(output);
        
    //7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?
        //Напевно не зрозумів самого завдання
        