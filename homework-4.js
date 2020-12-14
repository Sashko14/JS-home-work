/*HOME WORK 4*/
     
    //1. Write a JavaScript program which computes, the average marks of the following students Then, this average is used to determine the corresponding grade.
       
        let markAll = {
            names: ['John', 'Bill', 'David', 'Ryan', 'Nick'],
            marks: [80, 77, 68, 88, 95],
            grade: ['A', 'B', 'C', 'D', 'E']
        };
        
        let avgMark = 0;
        for (let i = 0; i < markAll.marks.length; i++){
            avgMark += (markAll.marks[i] / markAll.marks.length);
        };
        console.log(avgMark);
        let result = 'Average mark is ';
        
        if (avgMark < 60) {
            console.log(result + markAll.grade[4])
        } else if (60 <= avgMark && avgMark < 70) {
            console.log(result + markAll.grade[3])
        } else if (70 <= avgMark && avgMark <80) {
            console.log(result + markAll.grade[2])
        } else if (80 <= avgMark && avgMark < 90) {
            console.log(result + markAll.grade[1])
        } else {
            console.log(result + markAll.grade[0])
        };
        
        
        //2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.
        
        var sum = 0;
        for (var i = 0; i < 1000; i++)
        {
            if (i % 3 === 0 || i % 5 === 0)
            {
               sum += i;
            }
        }
        console.log(sum);
        
        
        //3. Write a JavaScript program to construct the following pattern, using a nested for loop.
        
        var i, j, star;
        for( i = 1; i <= 6; i++)
        {
           for ( j = 1; j < i; j++)
             {
            star = star + ("*");        
              }
         console.log(star);
         star = '';    
        }
        