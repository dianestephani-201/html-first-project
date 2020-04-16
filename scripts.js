var greeting = 'Welcome, ';
var name = 'Washington State!';
var welcome = greeting + name;
 var date = new Date();
var day = date.getDay()
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is " + daylist[day] + "!");

function javaDay() {
    document.write (welcome + '</br>');
    document.write ("Today is " + daylist[day] + "!");
}
