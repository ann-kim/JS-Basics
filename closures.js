//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer();

//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var phone = callFriend();
phone("435-215-9248");


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4

var makeCounter = function() {
  var counter = 0;
  return function() {
    counter += 1;
    return counter;
  }
}


//Next Problem
/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/
  //Code Here
var outerFunction = function(funct) {
  var counter = 0;
  return function() {
    if (counter < 1) {
      counter++;
      return funct();
    } else {
      return "Already shown once";
    }
  };
};

var test = function() {
  return "Test";
};

var showIt = outerFunction(test);

console.log(showIt());
console.log(showIt());
console.log(showIt());



//Next Problem
/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
var fnCounter = function(anonFunc, N) {
  counter = 0;
  return function() {
    if (counter < N) {
      counter++;
      return anonFunc();
    } else {
      return "STOP";
    }
  };
};

var test = function() {
  return "Keep going!";
};

var seeIt = fnCounter(test, 3);

console.log(seeIt());
console.log(seeIt());
console.log(seeIt());
console.log(seeIt());



//Next Problem
/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };
  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.
    //Answer Here
The function will log i after i*1000 milliseconds (so when i=1, "1" will be logged in the console after 1000 milliseconds or 1 second; the next loop, when i=2, "2" will be logged in the console after 2000 milliseconds of 2 seconds; etc.) and then stop when i = 5.

  Now, run the function in your console and note what happpens.
  Was your answer right or wrong?
    //Answer Here
Wrong.

  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/
       //Code Here
// var counter = function() {
//   return function() {
//     for (var i = 1; i < 6; i++) {
//       setTimeout(function(){
//         console.log(i);
//       }, i * 1000);
//     }
//   }
// };

// var countIt = counter();
// countIt();


function counter(i) {
  setTimeout(function() {console.log(i);}, i * 1000);
}

for (var i = 1; i <=5; ++i) {
  counter(i);
}

//Next Problem
/*
  Make the following code work
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
  *Hint: Don't let this fool you. Break down what's really happening here.
*/
var funcArray = [function(){console.log(0);}, function(){console.log(1);}, function(){console.log(2);}, function(){console.log(3);}, function(){console.log(4);}, function(){console.log(5);}];

funcArray[0]();
funcArray[1]();
funcArray[2]();
funcArray[3]();
funcArray[4]();
funcArray[5]();



