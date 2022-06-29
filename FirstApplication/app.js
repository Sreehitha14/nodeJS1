console.log("we need to start by typing cmd in path and then type code . and then we need to type npm init and then we need to create new file in the application and then ctrl + ~(i.e., char beside 1) is used to open terminal")
console.log(2 + 3)
console.log(55-31)
var a= 5, b = 10
var c = a + b
console.log("Addition " + c)
//objects - collection of data members and methods. class is also having similar def. Since obj and class are interchangable
//array - collection of homogeneous elements
//json - java script obj notation
//for - gnrl, for - in, for - each
var num = [12, 22, 4, 6, 2];
console.log("For in")
for(var x in num){
    console.log(num[x]);
}
console.log("For Each")
num.forEach(myFun);
function myFun(val){
    console.log( val);
}
// func that returns a passed str with ltrs in alphabetical order
//This is done by cascading of function calls that is o/p of one func will be i/p of other func
console.log("Sorting a string in alphabetical order");
var str = "absufecsdnnsdm";
function alphabeticalSort(text){
    return text.split('').sort().join('');
}
console.log(alphabeticalSort(str));
console.log(alphabeticalSort("Sreehitha"));