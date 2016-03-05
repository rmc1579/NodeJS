//array.js

var grades = [100, 50];

grades.push(79); //adds item to last place on array
grades.unshift(9); //adds item to first place on array

var grade = grades.pop(); //removes last item on array

console.log(grade);
console.log(grades);

grade = grades.shift(); //removes first item on array

console.log(grade);
console.log(grades);

console.log(grades[0]);
console.log(grades.length);


//irrates array

grades.forEach(function(grade){
    console.log(grade);
});

var grades = [100, 50, 75];
var totalGrades  = 0;

//method addGrades

grades.forEach(function (grade){
    totalGrades += grade;
});

console.log('Current total is: ' + totalGrades);

console.log('The average grade is: ' + totalGrades/grades.length);