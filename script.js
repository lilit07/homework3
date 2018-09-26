//1.A function that takes at least three arguments and returns the result of some set of operations using those arguments
const numbers = function(a,b,c,d){
return a + c -b*d;

}
console.log(numbers(4,5,2,8));
//2.A function that takes no arguments and returns something
const noarguments = function(){
return 'Function without arguments';

}
console.log(noarguments());
//3.A function that takes arguments, does something but does not return anything 
const anyfunc = function(a,b,c){
 let d = (a - b)*c
}
console.log(anyfunc(6,4,9))
//4.A function that takes three strings and returns the string that is the longest
 const fString = function (a,b,c) {
 let max = a;
     if (b.length > a.length){
         max = a;
     }
	 if (max.length < c.length){
         max = c;
     }
	 return max;
 };

 console.log(fString('apple', 'banana', 'pineapple'));

//5.A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger

const fNum = function (a,b) {
    if (a === b){
        return 0;
    }else if (a > b){
        return 1;
    }else{
        return 0
    }
};
console.log(fNum(8,6));

//6.Create a multiply function (that multiplies the two given arguments together and returns the result)

const fMultiply = function (a,b) {
    return a * b
};
console.log(fMultiply(23,2));
//7.Create a divide function (that divides the first argument by the second and returns the result)
const fDivide = function(a,b){
let c = a/b;
return c;
}
console.log(fDivide(15,5));
//8.Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) - 6 points
const triangleArea = function(base, height) {
  let area = fDivide(fMultiply(base,height), 2);
  return area;
};
console.log(triangleArea(6,8));
//9.Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).
const numLength = function(a){
let string = '' + a;
return string.length;
}
console.log(numLength(54268154));
//10.Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1
function lengths(a,b,c){
let newString = a + b;
if(newString.length > c){
return 1;
}else{
return -1;
} 
}
console.log(lengths('fhehjhf','dyhg', 6));
//11.Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1
function runStuff(string, base1, height1){
if(string === 'rectangle'){
return base1* height1;
}else if(string === 'triangle'){
return triangleArea(base1,height1)
}else{
return -1;
}
}
console.log(runStuff('triangle', 8,5))