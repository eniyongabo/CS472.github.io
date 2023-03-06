
/*  Timer Exercise

Q1. 
•	SetTimeout (booyah, 2000): this sets up a timer that will execute the function booyah  after a delay of 2000 milliseconds. 
       The booyah function is not executed immediately, but rather is passed as a reference to setTimeout, 
        which schedules it to be executed later. 

 •	SetTimeout(booyah(), 2000); executes the booyah function immediately and passes its return value (if any) to setTimeout.*/


 //Q2

 var myfunc = function (a, x) {
    return a * x;
};
    var x = myfunc(2, 3);   //6
    var y = myfunc;    //error
     alert(x);       //6
     alert(y (2, 3)); //6

   // Q3

    	function booyah1() {
        setTimeout (function () {
        alert("BOOYAH!");
          }, 2000);
          }

        function booyah2() {
          setTimeout (function () {
          alert("BOOYAH!");
            }, 2000);
         }


         /* "Unobtrusive JavaScript" is an approach that involves separation of web page content into 3 different 
         concerns: content (HTML),presentation (CSS), and behavior(JS); placing JS in an external file, it allowing 
         the website to function even if JavaScript is disabled or unavailable on the user's device. 
         The JavaScript code is then attached to the HTML elements using event listeners,allowing it to manipulate 
         the page's content and behavior when triggered.

         Reasons: to create more accessible, usable, and maintainable web pages, which benefits both users and developers.


         */