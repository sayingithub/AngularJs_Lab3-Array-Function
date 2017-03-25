/**
 * Created by Niyas on 11/18/2016.
 */


var things1 = [1,2,3];
console.log(things1);

// in javascript, we can have multiple data types in same array
var things2 = [1,'2',3];
console.log(things2);

// even we can have the function in array
var things3 = [1,'2',function(){
    alert("Hello, I am in Array!!")
}];
console.log(things3);

//call the function in array
things3[2]();




