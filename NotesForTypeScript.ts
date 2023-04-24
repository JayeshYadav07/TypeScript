// 📢 boolean value
let bool : boolean = false;
bool : true;

// ----------------------------------------------------------------

// 📢 number value
let num : number;  // declaration
num = 10;          // initialization
// num = "10" // error 

// ----------------------------------------------------------------

// 📢 Union 
let age : number | string;
age = 10;
age = "Ten";

// ----------------------------------------------------------------

// 📢 Arrays 
let arr : number[] = [1,2,3];
// arr.push("One");   // error
arr.push(1);  

let arr1:( number | string )[]  = [1,"One"];
arr1.push(10);
arr1.push("Ten");


// 📢 second way to create arrays 

let newArr : Array<number> = [];
// newArr.push("One");   // error
newArr.push(1); 

// ----------------------------------------------------------------

// 📢 Readonly Array 

let arr2 : readonly number [] = [1,2,3];
// arr2.push(10);  // cannot modify the array


// 📢 Difference between const and readonly in typescript

const constArr = [1, 2, 3];

// Not allowed
// constArr = [4, 5, 6]

// Perfectly fine
constArr.push(4);

// Perfectly fine
constArr[0] = 9;

//----------------------------------------------------------------

// 📢 Tuples :- A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value

let Tuples : [number, number] ;

// Tuples = [1,"okk"]; error 

Tuples = [1,2]

// ----------------------------------------------------------------

// 📢 Function 

// Syntax
// function function_namr(parameters_name : parameters_type) : return_type{
//     // code
// }

function add (A : number , B : number) : number{
    return A + B;
}

// ----------------------------------------------------------------

// 📢 Object must have only id type of number and name type of string
let obj:{
    id : number 
    name : string,
}={ id: 1, name: "string"}

// 📢 Object must have id type of number but name type of string is optional
let obj1:{
    id : number 
    name ?: string,
}={ id: 1}

// 📢 Object have multiple key types of string (Here we can add N numbers of key having type of string)
let obj2:{
    [x : string]: string;
}={ 0: "string0", 1: "string0" , 2: "string2"}


// ----------------------------------------------------------------

// 📢 Custom Date Type

type CustomType = {
    id : number;
    name : string;
    subjects : string[];
}

let objCustomType: CustomType = { id: 0, name:"jayesh" , subjects: ["Hindi","English"] };

// ----------------------------------------------------------------

// 📢 Enum = A special "class" that represents a group of constants (unchangeable variables).

enum CardinalDirections {
  North = 1,
  East = 2,
  South = 3,
  West = 4,
}

// now direction can have only 1 , 2 , 3 , 4 if we try any other number it will give us errors
let direction : CardinalDirections ;
direction = CardinalDirections.North;

// direction  = 5; error
direction = 2; // It work fine

// ----------------------------------------------------------------

// 📢 Interfaces : TypeScript Interface is a special entity that helps us create objects with certain properties.
 
interface user {
    name : string;
    age : number;
}
interface studentDetails extends user {
    address : string;
    printDitails : (n:string,a:number,add:string) => void;
}

let students : studentDetails  = {
    name : 'Student',
    age : 21,
    address : "Mulund",
    printDitails : (n,a,add) =>{
        console.log(n + ": " + a + " " + add);
    }
}
students.printDitails("Jayesh",10,"Mulund");