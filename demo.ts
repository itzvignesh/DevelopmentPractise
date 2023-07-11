// var a = 10;
// console.log(window.a);

// let a = 10; // If datatype is let, "window.a", it will not accept
// console.log(window.a); //Property 'a' does not exist on type 'Window & typeof globalThis'.

// var a = 10;
// var a = 20; // we can redeclare value when datatype is "Var"
// console.log(a);

// let a = 10;
// let a = 20; // we can't redeclare value when datatype is "Let"
// console.log(a);

// let a = 10;
// a = 20; // we can update the value even if datatype is "Let"
// console.log(a);

// var a = 10;
// function call(){
//     console.log(a); //Print -> 10
// }
// call();

// var a = 10;
// function call(){
//     var b = 20;
//     console.log(a); //Print -> 10
// }
// call();
// console.log(b); // cant call outside --> b is not defined

//---Same behavior of Var datatype-----//

// let a = 10;
// function call(){
//     let b = 20;
//     console.log(a); //Print -> 10
// }
// call();
// console.log(b); // cant call outside --> b is not defined

// var a = 10;
// function call(){
//     var a = 20;
//     return a; //Print -> 20
// }
// console.log(call());

// function call(){
//     var a = 10;
//     return function call2(){
//         var b = a+20;
//         return b;
//     };
// }
// var call3 = call();
// console.log(call3()); //Call3 object will return the value

// function call(check:boolean){
//     if(check=true){
//         var x = 10;
//     }
//     return x;
// }
// console.log(call());

// function callc(x:number){
//     var x = 65;
//     return x;
// }
// callc(55);
// if we use "Var" data type, index value will be changed in 2nd for loop --> output -> 6
// function sumMatrics(matrix : number [][]){
//     var sum = 0;
//     for (var index = 0; index <matrix.length; index++) {
//         var currentRow = matrix[index];
//         for (var index = 0; index < currentRow.length; index++) {
//             sum += currentRow[index];
//         }
//     }
//         return sum;
// }
// console.log(sumMatrics([[1,2,3],[4,5,6]]));
//---------------------------------------
//output is 10 when 'a' datatype is "var"
// function f(x){
//     if(x){
//         var a = 10;
//     }
//     return a;
// }
// console.log(f(true));
//-------------------------------------
//output is not defined when 'a' datatype is "let"
//we can assign the within the function
// function f(x){
//     if(x){
//         let a = 10;
//     }
//     return a;
// }
// console.log(f(true));
//------------------------------------------
// function f(x){
//     if(x){
//         let a = 100;
//         return a;
//     }
// }
// console.log(f(true));
//------------------------------------------------
// function f(x:boolean){
//     var a=10
//     if(x){
//         var a = 20;
//     }
//     return a;
// }
// console.log(f(true));//output --> 20
//--------------------
// function f(x:boolean){
//     let a=10
//     if(x){
//         let a = 20;
//     }
//     return a;
// }
// console.log(f(true));// output --> 10 (Because if datatype is "let", we cant update the "a" value and cant call outside the function)

//---------------------------------------------------
// if we use "Let" data type, index value will not be changed in 2nd for loop --> output -> 21

// function sumMatrics(matrix : number [][]){
//     var sum = 0;
//     for (let index = 0; index <matrix.length; index++) {
//         var currentRow = matrix[index];
//         for (let index = 0; index < currentRow.length; index++) {
//             sum += currentRow[index];
//         }
//     }
//         return sum;
// }
// console.log(sumMatrics([[1,2,3],[4,5,6]]));
//------------------------------------------------

// for (var index = 0; index < 10; index++) {
//     setTimeout(() => {
//         console.log(index);
        
//     }, 100*index);
    
// }// if datatype is var for index, output --> print 10 for 10 times

// for (var index = 0; index < 10; index++) {
//    ((index:number)=>{
//     setTimeout(() => {
//         console.log(index);
//     }, 100*index);
//    })(index);
// }//we can use this method to print to 0 to 9 by using var datatype 

// for (let index = 0; index < 10; index++) {
//         setTimeout(() => {
//             console.log(index);
            
//         }, 100*index);
        
//     } //if datatype is "let" for index, output --> print 0 to 9
//--------------------------------------------------------

// function f(check:boolean){
//     let a = 100;
//     if(check){
//         let b = a+1;
//         return b;
//     }
// }
// console.log(f(true));

// function f(check:boolean, x:number):number{
//     if(check){
//         let x = 10;
//         return x;
//     }
//     return x;
// }
// console.log(f(false,0));

// console.log(f(true,0));
//---------------------------------------
// let a = 10;
// a="Hello"; //cant update
// a=true; ////cant update
// a = {//cant update
//     name : 'Vignesh',
//     age : 26
// } //if we use Let datatype, it wont allow to update in TS
// // If we use Var datatype. it will allow and print --> Vignesh
// console.log(a.name); //cant update 
// a=[1,2,3,4];
// a.forEach(a => console.log(a)); 
//if we use Let datatype, it wont allow to update in TS
// // If we use Var datatype. it will allow and print --> 1,2,3,4
//JS script convert let to var and print 1,2,3,4 in the console
//--------------------------------------------------------

// let n1=10;
// let n2=20;
// let add =(a:number,b:number):number=>{
//     return a+b;
// };
// console.log(add(n1,n2)); // output --> 30

// let n1='10';
// let n2=20;
// let add =(a:number,b:number):number=>{
//     return a+b;
// };
// console.log(add(n1,n2)); // TS throw error
//JS print --> 1020

// let s1:string;
// s1='Hello'
// let great = (a:string):string=>{
//     return `${a} Welcome back with bang`;
// }
// console.log(great(s1));

//----Null and undefined----//

//undefined --> declare the variable but not assigning the value
//Null --> No value assigned to the variable
// let a:undefined = undefined;
// let b:null = null;
// let c:Number = undefined;
// let d:String = null;

//---------Array------------//

// let a = [
//     1,
//     "Hello",
//     {
//         name : "Vignesh"
//     },
//     true,
//     [1,2,3]
// ];
// a.forEach(a => console.log(a));

// let arr1 : number[] = [1,2,3];
// let arr2 : (Number | String | boolean)[] = [1,"a1",2,"a2",3, true];
// arr1[1]=1;
// arr2[0]='Hello';
// arr2.forEach(a=> console.log(a)
// )

// let multimat : (number | String)[][] = [[1,2,3],[4,5,6]];
// multimat.forEach(a1 => {
//     a1.forEach(a2 => console.log(a2)
//     )
// })

//----------------------------Tuple type-------------------------//

// let person : [number,string,string[]] = [1,"Hello",["a1","a2"]];
// let person : [number , string] = ["hello", 2] //Throw error --> should as per sequence [number,String]
// let check : [{},(String | number)] = [{
//     name : "vignesh"
// },"Hello"];

// let check1 : [{},(String | number),[number],[String]] = [{
//     name : "vignesh"
// },"Hello",[1],["2"]];

//-------------------------- Any Type --------------------------//

// let a : any[];
// a = [1,3,4,5, "Hello" , true , false , {}]

// let a1:any;
// a1 = 10;
// let b : string ;
// b = a1;
// console.log(b);

//------------------------ Unknown Type ----------------------//

// let a : unknown;
// a="Hello";
// a=2;
// a=true;
// a={};
// let b : string;
// b = a; // cant assign unknown variable
// let n : number = a; // cant assign unknown variable

//-- Typeof method --//

// let userInput : unknown;
// let userName : String;
// let userAge : number;
// userInput = "Vignesh";
// // userName = userInput ; // if type is  "unknown" we cant use that object to overcome this issue, we using "typeof" and type assertion method
// if(typeof userInput === 'string'){
//     userName = userInput ;
//     console.log(userName); 
// }else if(typeof userInput === 'number'){
//     userAge = userInput;
//     console.log(userAge);
// }
//-- Type assertion method --//
// let userInput : unknown;
// let userName : String;
// let userAge : number;
// userInput = "Vignesh";
// // userName = (userInput as string)
// // console.log(userName);

// // userInput = 100;
// // userAge = (userInput as number)
// // console.log(userAge);

// console.log((userInput as string).toUpperCase());

//-------- Call unknown function property --------//

// let myobj: unknown;
// myobj = {
//     name : "Vignesh"
// };

// interface c {
//     name : string
// };

// function hasName(obj : unknown) : obj is c{
//     if(typeof obj === "object" && "name" ){
//         return true;
//     }else{
//         return false;
//     }
// }

// // console.log(myObj.name);// We cant call that method if its unknown

// if(hasName(myobj)){
//     console.log(myobj.name);
// }else{
//     console.log("Name not exist");
// }

//----------- Return Void Type ---------------//

// let firstName : string;
// let secondName : string;
// firstName = 'Vignesh';
// secondName = 'Rithik';
// let fullName = (a:string, b:string) : void => {
//     console.log(`${a} ${b}`);
//     // return `${a} ${b}`; // void wont accept return type
// }
// fullName(firstName, secondName)

//--------------------------------------------------------

// let obj = {
//     name : 'Vignesh',
//     Age : 26
// };
// console.log(obj.name);

// let obj : {}= {
//     name : 'Vignesh',
//     Age : 26
// };
// console.log(obj.name); // We cant print name to overcome we should assign datatype
//----------->
// let obj : {
//     name : string;
//     age : number;
// } = {
//     name : 'Vignesh',
//     age : 26
// };
// console.log(obj.name); // Now we can access the name

//----------Interface----------//
//We can access the element explictly by using interface

// interface Iobj {
//     name : string;
//     age : number;
// }
// let obj : Iobj = {
//     name : 'Vignesh',
//     age : 26
// };
// console.log(obj.age);
//
// We can access the element by using function

// interface Iobj {
//     name : string;
//     age : number;
// }

// let check = ( o : {
//     name : string;
//     age : number;
// }) : void => {
//     if(o.age>18){
//         alert('Eligible')
//     }else{
//         alert('Not eligible')
//     }
// }

// let obj = {
//     name : 'Vignesh',
//     age : 26
// };
// console.log(obj.name);
// check(obj);

// interface Iobj {
//     name : string;
//     age : number;
// }

// let check = ( o : Iobj) : void => {
//     if(o.age>18){
//         alert('Eligible')
//     }else{
//         alert('Not eligible')
//     }
// }

// let obj : Iobj = {
//     name : 'Vignesh',
//     age : 26
// };
// console.log(obj.age);
// check(obj);

// interface IpersonA {
//     firstName : string;
//     lastName : String;
//     fullName() : string;
//     generateID : () => number;
// }

// let personAdetails : IpersonA = {
//     firstName : 'Vignesh',
//     lastName : 'Rithik',
//     fullName : function() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     generateID : () => {
//         return Math.floor(Math.random() * 100);
//     }
// }

// console.log(`
// ID   : ${personAdetails.generateID()}
// Name : ${personAdetails.fullName()}
// `);

// interface person{
//     name : string;
//     age : number;
//     address : string;
//     phone_Number ?: number;
// }

// let persons : person[] = [
//     {
//         name : 'Vignesh',
//         age : 26,
//         address : "chennai",
//         phone_Number : 9084564785
//     },
//     {
//         name : 'Rithik',
//         age : 26,
//         address : "chennai",
//     },
//     {
//         name : 'Vikram',
//         age : 26,
//         address : "chennai",
//         phone_Number : 9088798465
//     }
// ];

// persons.forEach(a => {
//     if(a.phone_Number === undefined){
//         console.log(`${a.name} not specify the Phone number`);
//     }else{
//         console.log(`${a.name} specify the Phone number`);
//     }
// });

// interface person{
//     name : string;
//     age : number;
//     address : string;
//     phone_Number ?: number;
// }

// const Userdetails = (n : string, a:number, addr : string, phoneNo : number | undefined = undefined) : person =>{
//     return{
//         name : n,
//         age : a,
//         address : addr,
//         phone_Number : phoneNo
//     };
// }

// const users : person [] = [];
// users.push(Userdetails('Vignesh',25,'Chennai')); // adding the value to the array
// users.push(Userdetails('Rithik',25,'Chennai',098945743568));
// users.push(Userdetails('Vicky',25,'Chennai',9899743568));

// users.forEach(a => {
//     if(a.phone_Number === undefined){
//         console.log(`${a.name} not specify the Phone number`);
//     }else{
//         console.log(`${a.name} specify the Phone number`);
//     }
// });

//-------------------Never return type-------------------
// If we assign return type as never, it will not return anything
// const generateError = (message : string, code : number) => {
//     throw{
//         Message    : message,
//         Errorcode : code
//     };

// }
// const result = generateError(`An error occured`, 240);
// console.log(result);

// const error = (message : string) : never => {
//     throw new Error(message);
// };
// const fail = () => {
//     return error ( `Something went wrong`);
// }
// // error(`An error occured`);
// fail();

// const InfiniteLoop = () : never => {
//     while(tgfrue){
//         console.log('We are in looping state'); 
//     }
// }
// InfiniteLoop();

//-------------Union Type -------------//

// let empID : String | number | boolean ;
// empID = 'Vignesh';
// empID = 123;
// empID = true;
//-------------
// const Add_Or_Concat = (a: string|number, b: string|number) : string |number =>{
//     if(typeof a === "string" && typeof b === "string"){
//         return `${a} ${b}`;
//     }else if( typeof a === "number" && typeof b === "number"){
//         return a+b;
//     } else{
//         return `${a} ${b}`;
//     }
// }

// console.log( `${Add_Or_Concat('Vignesh',' Rithik')}` );
// console.log( `${Add_Or_Concat(24, 26)}`);
// console.log( `${Add_Or_Concat(24, 'Vignesh')}`);

//----------

// function padLeft(value : string, padding : any){
// if(typeof padding === "number"){
//     return Array(padding+1).join(" ")+value;
// }else if(typeof padding === "string"){
//     return `${value}${padding}`;
// }else{
//     throw new Error (`Expected string or number, get '${typeof padding}'.`);
// }
// }
// console.log(padLeft('World',5)); // [5Space]World
// console.log(padLeft('Hello','World')); //HelloWorld
// console.log(padLeft('World',true)); // Uncaught Error: Expected string or number, get 'boolean'. at padLeft (demo.js:510:15) at demo.js:515:13

//---------- Union type ----------//

// interface Bird{
//     fly() : void;
//     layEggs() : void;
// }

// interface Fish{
//     swim() : void;
//     layEggs() : void;
// }

// let getsmallpet : () => Fish | Bird;
// let pet = getsmallpet();
// pet.layEggs(); // we can access only the common method
// pet.fly(); // we cant access the diff name method

//----------- Literal Type -----------//

// let a = 10;
// a =20;
// const great = "Hello World" ; // we cant update
// let hello : 'Welcome';

// const person = {
//     id : 24,
//     name : 'VIgnesh'
// }
// person.name = 'Vignesh'; // we can update the value

//------------

// interface I {
//     id : 24,
//     name : 'Rithik'
// };
// // if we assign 'interface name' to return type , We cant update  
// const person : I = {
//     id : 24,
//     name : 'Rithik'
// }
// person.name = 'Vignesh'; // Error will throw

// interface I {
//     direction : "up" | "down" | "left" | "Right";
//     rotate : 5 | 10 | 15 | 20 ;
// }
// let props : I = {
//     direction : "left",
//     rotate : 5
// };

// let elem : I = props;

//--------------------------------------------------------
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));

// function add(a:number,b:number){ //Assign a and b are number data type
//     return a+b;
// }
// console.log(add('1',2)); //'string' is not assignable to parameter of type 'number'


// function add(a:number,b:number): string{ //Here we mentioned return type as "string". but function return number
//     return a+b; //Type 'number' is not assignable to type 'string'.
// }
// console.log(add(1,2));

//--------------------------------------------------------
// const a = 10;
// console.log(typeof a); // print -> number

// const a = '10';
// console.log(typeof a); // Print --> String

// const a : number = '10'; // throws error -> Type 'string' is not assignable to type 'number'
// a = 'Hello'; // Once we assign value for "const varible we cant change the value" -> error:Cannot assign to 'a' because it is a constant.
// console.log(typeof a);

//---------------------------------------------------------------
// let a = 10;
// let a : number = 10;
// let a = 'Vignesh';
// a = 'Vignesh'; //cant assign string value because already assign as number
// let a;
// a=10;
// a='Vignesh';
// a=()=>{
//     console.log("hello");
// }
// a={
//     name : "abc"
// }

// // console.log(a);
// console.log(a.name);
//------------------------------------------------------------------

// class Employee {
//     public ID ;
//     public Empname ;
//     protected departname;
//     constructor(id,empname,deptname){
//         this.ID = id;
//         this.Empname = empname;
//         this.departname = deptname;
//     }
//     public details():string {
//         return `id = ${this.ID} empnme =${ this.Empname} dept = ${this.departname}`
//     }
// }
// class Company extends Employee{
//     private jobRole;
//     constructor(id:Number,empname:String,deptname:string,j:String){
//     super(id,empname,deptname);
//     this.jobRole = j;
//     }
//     public company_details():void{
//         console.log(`id = ${this.ID} empnme =${ this.Empname} dept = ${this.departname} j=${this.jobRole}`);
//     }
// }
//     const emp = new Company(123, 'Vignesh', 'Promanage','Developer');
//     emp.details();
//     emp.company_details();

// function invite(user){
//     return "Happy to Welcome you "+user;
// }
// let welname = 'Vignesh';
// console.log(invite(welname));
// const prompt = require("prompt-sync")();
// let number = prompt("Enter the number:");
// console.log(number);

// confirm('Lets start...');
// console.log("Lets start.....");
// (function invite(){
//     alert('Hello!..');
// })();
// function add(){
//     return 1+2;
// }
// console.log(alert(add()));

//---------------------------------------------------------

// function great() : 1|2|3|4|5|6 {
//     return (Math.floor(Math.random()*6)+1) as 1|2|3|4|5|6; 
// }
// const result = great();
// console.log(result);

//--------------------------- Login page ----------------------

// let temp1 = document.getElementById("i1") as HTMLInputElement;
// let temp2 = document.getElementById("i2") as HTMLInputElement;
// let buttonvar = document.getElementById("submit_button") as HTMLInputElement;
// let temp3 = document.getElementById("s1") as HTMLSpanElement;
// let temp4 = document.getElementById("s2") as HTMLSpanElement;

// interface ValidateSuccess{
//     isValid : true;
//     reason : "Success!..";
// }
// interface ValidateFailure{
//     isValid : false;
//     reason : "Invalid UserName" | "Invalid Email-Id";
// }
// type validateResult = ValidateSuccess | ValidateFailure ;

// let response = (result : validateResult) => {
//     if(result.isValid){
//         temp3.innerHTML = "";
//         temp4.innerHTML = "";
//         temp1.value="";
//         temp2.value="";
//         temp1.style.border = "2px solid black";
//         temp2.style.border = "2px solid black";
//         confirm(`${result.reason}`);
//     }else{
//         switch(result.reason){
//             case "Invalid UserName" :
//                 temp4.innerHTML="";
//                 temp3.innerHTML = `* ${result.reason}`;
//                 temp3.style.color = "red";
//                 temp1.style.border = "2px solid red";
//                 temp2.style.border = "2px solid black";
//                 break;
//             case "Invalid Email-Id" :
//                 temp4.innerHTML = `*${result.reason}`;
//                 temp3.innerHTML = "";
//                 temp4.style.border = "red";
//                 temp1.style.border = "2px solid black";
//                 temp2.style.border = "2px solid red";
//                 break;
//         }
//     }
// }

// let respfunc = (v1 : string, v2 : string)=>{
//     let userName : RegExp = /^[a-zA-Z]{5,15}$/;
//     let email : RegExp = /^([a-zA-Z0-9\.-])+@([a-zA-Z0-9])+.([a-z]{2,20})$/;
//     if(!(userName.test(v1))){
//         response({isValid : false, reason : "Invalid UserName"});
//     }else if(!(email.test(v2))){
//         response({isValid : false,reason : "Invalid Email-Id"})
//     }else{
//            response ({isValid:true,reason : "Success!.."}) 
//         }
// }

// buttonvar.addEventListener("click", (e:Event) => {
//     e.preventDefault(); // Stop to refresh the page
//     let usernme : string = temp1.value;
//     let gmailID : string = temp2.value;
//     respfunc(usernme,gmailID);
// })

//------- Developed Calculator ------//

// let i1 = document.getElementById("i1") as HTMLInputElement;
// let i2 = document.getElementById("i2") as HTMLInputElement;
// const b1 = document.getElementById("bt1") as HTMLButtonElement;
// const b2 = document.getElementById("bt2") as HTMLButtonElement;
// const b3 = document.getElementById("bt3") as HTMLButtonElement;
// const b4 = document.getElementById("bt4") as HTMLButtonElement;
// type cal = "add" | "sub" | "multiply" | "Division";
// const Calculate = (a:number,b:number,cal:cal) =>{
//     if(cal === "add"){
//         return a+b;
//     }else if(cal === "Division"){
//         return a/b;
//     }else if (cal === "multiply"){
//         return a*b;
//     }else if(cal === "sub"){
//         return a-b;
//     }
// }

// b1.addEventListener('click', () => {
//     let v1 : number = parseInt(i1.value);
//     let v2 : number = parseInt(i2.value);
//     i1.value = "";
//     i2.value = "";
//     alert (`Result(Add)= ${Calculate(v1,v2,"add")}`)
// });
// b2.addEventListener('click', () => {
//     let v1 : number = parseInt(i1.value);
//     let v2 : number = parseInt(i2.value);
//     i1.value = "";
//     i2.value = "";
//     alert (`Result(Add)= ${Calculate(v1,v2,"sub")}`)
// });
// b3.addEventListener('click', () => {
//     let v1 : number = parseInt(i1.value);
//     let v2 : number = parseInt(i2.value);
//     i1.value = "";
//     i2.value = "";
//     alert (`Result(Add)= ${Calculate(v1,v2,"multiply")}`)
// });
// b4.addEventListener('click', () => {
//     let v1 : number = parseInt(i1.value);
//     let v2 : number = parseInt(i2.value);
//     i1.value = "";
//     i2.value = "";
//     alert (`Result(Add)= ${Calculate(v1,v2,"Division")}`)
// });

//-------------------------- ----------------------------//

// const div1 = document.getElementById("div1") as HTMLDivElement;
// const bton1 = document.getElementById("bt1") as HTMLButtonElement;
// const bton2 = document.getElementById("bt2") as HTMLButtonElement;
// const bton3 = document.getElementById("bt3") as HTMLButtonElement;
// type easing = "ease-in" | "ease-out" | "ease-in-out";

// const animate = (easing : easing) =>{
//     if(easing === "ease-in"){
//         div1.style.animation="myanimation 8s infinite";
//         div1.style.animationDirection="alternate";
//         div1.style.animationTimingFunction = easing;
//     }

//     else if(easing == "ease-out"){
//         div1.style.animation="myanimation 8s infinite";
//         div1.style.animationDirection="alternate";
//         div1.style.animationTimingFunction = easing;
//     }

//     else if(easing == "ease-in-out"){
//         div1.style.animation="myanimation 8s infinite";
//         div1.style.animationDirection="alternate";
//         div1.style.animationTimingFunction = easing;
//     }
// };
// bton1.addEventListener("click", () => {
//     animate("ease-in");
// });
// bton2.addEventListener("click",()=>{
//     animate("ease-out");
// });
// bton3.addEventListener("click",()=>{
//     animate("ease-in-out");
// })

//--------------------discriminating function---------------------/

// type NetworkLoadingState = {
//     state : "Loading";
// };
// type NetworkFailedState = {
//     state : "Failed";
//     code : number;
// };
// type NetworkSuccessState = {
//     state : "Sucesss";
//     response : {
//         title : string;
//         duration : number;
//         summary : string;
//     };
// };

// type NetworkState = NetworkFailedState | NetworkLoadingState | NetworkSuccessState;

// function logger(state : NetworkState) : string{
//     switch(state.state){
//         case "Loading":
//             return "Downloading Please Wait a moment..";
//         case "Failed" : 
//             return `Error ${state.code} there was a problem with the network!`;
//         case "Sucesss" :
//             return `Downloaded ${state.response.title} - ${state.response.summary}-${state.response.duration}`;
//     }
// }
// console.log(logger({state : "Failed",code : 404}));
// console.log(logger({state : "Loading"}));

//-------------------------discriminating function----------------------//

// interface add{
//     function : "add";
//     num1 : number;
//     num2 : number;
//     add() : number;
// }
// interface sub {
//     function : "sub";
//     num1 : number;
//     num2 : number;
//     sub() : number;
// }
// interface mul{
//     function : "mul";
//     num1 : number;
//     num2: number;
//     mul() : number;
// }
// interface div{
//     function : "div";
//     num1 : number;
//     num2: number;
//     div() : number;
// }

// type calc = add | sub |mul | div ;
// const result = (cal : calc) => {
//     switch (cal.function){
//         case "add":
//             return cal.add();
//             break;
//         case "sub" :
//             return cal.sub();
//             break;
//         case "mul":
//             return cal.mul();
//             break;
//         case "div":
//             return cal.div();
//             break;
//     }
// };
// console.log(result({function : "add",num1:10,num2:20,add:function(){
//     return this.num1 + this.num2;
// }}));
// console.log(result({function : "sub",num1:100,num2:20,sub:function(){
//     return this.num1 - this.num2;
// }}));
// console.log(result({function : "mul",num1:100,num2:20,mul:function(){
//     return this.num1 * this.num2;
// }}));
// console.log(result({function : "div",num1:100,num2:20,div:function(){
//     return this.num1 / this.num2;
// }}));

//--------------------------Union type----------------------------//
// let userID = (id : string | number) => {
//     if(typeof id === "string"){
//         return id.toLocaleUpperCase();
//     }else {
//         return id.toString();
//     }
// };
// console.log(userID("abc"));
// console.log(userID(20));

//-----------
// const example = (str : string[] | string) : string => {
//     if(Array.isArray(str)){
//         return `Hello ${str.join()}`;
//     }else{
//         return `${str} world`;
//     }
// }
// example(["World"]);
// example("Hello");

//------------ Intersection type ----------------//

// interface businessPartner {
//     name : string;
//     credit : number;
// }
// interface identity {
//     id : number;
//     name : string;
// }
// interface contact {
//     email : string;
//     phone : string;
// }

// type Employee = identity & contact; //this is called intersection
// let e: Employee = {
//     id : 10,
//     name : "Vignesh",
//     email : "vignesh@gmail.com",
//     phone : "9898987678"
// };
// type emp = businessPartner & contact;
// let e1 : emp = {
//     name : 'Rithik',
//     credit : 10000,
//     email : 'rithik@gmail.com',
//     phone : "7878676765"
// };
// type em = businessPartner & contact & identity;
// let e2 : em = {
//     id : 12818,
//     name : "Vignesh",
//     credit : 10000,
//     email : 'rithik@gmail.com',
//     phone : "7878676765"
// }


// let d = document.getElementById("circle") as HTMLDivElement;
// let d1 = document.getElementById("oval") as HTMLDivElement;

// interface Circle{
//     shape : "circle";
//     color : string;
// }
// interface Radius {
//     radius : string;
// }
// interface oval {
//     shape : "oval";
//     ovalcolor : string;
// }

// type colorFullRadius = Circle & Radius;
// type overFullColor = Radius & oval;
// type shapes = colorFullRadius | overFullColor; 
// const Draw = (shap : shapes) => {
//     if(shap.shape === "circle"){
//     d.style.backgroundColor = shap.color;
//     d.style.borderRadius = shap.radius;
//     }else if (shap.shape === "oval"){
//         d1.style.backgroundColor = shap.ovalcolor;
//     d1.style.borderRadius = shap.radius;
//     }
// }

// Draw({
//     shape : "circle",
//     radius :"50%",
//     color : "red"
// });
// Draw ({
//     shape : "oval",
//     radius : "100px /50px",
//     ovalcolor : "blue"
    
// })

//------------------------ Read Only --------------------------

// let arr : ReadonlyArray<string> = ["a","b","c","d"];
// console.log(arr[0]);
// const a = (ar : readonly string[]) => {
//     const convert = ar.slice(); // slice() method is used to get array methods
//     convert.push("d"); // add element
//     convert.pop(); // remove last element in the array
// }
// a(["a","b","c"]);

// function readonlytuple(tuple :readonly [number,string]){
//     tuple.forEach(a => console.log(a));
// }
// readonlytuple([101,"abc"])

//--------------- Interface -----------------

// interface Employee {
//     empcode : number;
//     empname : string;
//     getSalary : (num : number) => number;
//     getmanagerName (num : number) : string;
// }
// const emp : Employee = {
//     empcode : 123,
//     empname : "Vignesh",
//     getSalary : (n) => {
//         return n;
//     },
//     getmanagerName : function(n) {
//         return ``;
//     }
// }

//-----------

// interface Iperson {
//     firstName : string,
//     lastName : string,
//     fullName() : string
// }


// const person = {
//     firstName : 'Vignesh',
//     lastName : 'Rithik',
//     fullName : function() : string {
//         return `${this.firstName} ${this.lastName}`;
//     } 
// }

// function display(obj : Iperson) : Iperson{
//     return obj
// }

// function display(obj : {
//     firstName : string,
//     lastName : string,
//     fullName() : string
// }):{
//     firstName : string,
//     lastName : string,
//     fullName() : string
// }{
//     return obj
// }

// console.log(display(person));

// console.log(person.fullName());


//-------------------------------

// interface IAccount {
//     name : string
//     amount : number 
//     accNumber : number
//     insert (name:string,amount : number , accNumber : number) : void
//     deposit (depamt : number) : void
//     withdraw (withdamt : number) : string | number
//     checkBalance (): number
//     display() : string 
// }

// let account = {
//     name : "",
//     amount : 0,
//     accNumber : 0,
//     insert : function(nme , amt : number , accno){
//         this.name = nme,
//         this.amount = amt,
//         this.accNumber = accno
//     },
//     deposit : function (amnt){
//         this.amount = this.amount+amnt;
//     },
//     withdraw : function (wtdrwamnt){
//       if(wtdrwamnt > this.amount){
//         return `Insufficient amount`;
//       }else{
//         this.amount = this.amount - wtdrwamnt;
//         return this.amount ;
//       }
//     },
//     checkBalance : function(){
//         return this.amount;
//     },
//     display : function (){
//         return `Account_number : ${this.accNumber} name: ${this.name} amount : ${this.amount}`;
//     }
    
// }
//     account.insert("Vignesh",100000,12818)
//     account.deposit(50000)
//     account.withdraw(10000)
    
//     account.display()
//     console.log(account.checkBalance());
//     account.withdraw(25000)
//     console.log(account.checkBalance());


//-------------------- Example for Optional ---------------------

// interface iEmployee {
//     empcode : number;
//     empName : string;
//     empDept ?: string;
// }

// const emp1 : iEmployee ={
//     empcode : 123,
//     empName : "Vignesh",
// }
// const emp2 : iEmployee = {
//     empcode : 456,
//     empName : "Rithik",
//     empDept : "Development"
// }

//------------------- Readonly ---------------------

// interface Citizen {
//     name : string;
//     readonly aadhar_no : number;
// }

// const person : Citizen = {
//     name : "Vignesh",
//     aadhar_no : 1234
// } 

// person.name = "Vignesh Rithik";
// person.aadhar_no = 785656; // We cant modify the aadhar_no because it is assignes as readonly type

//--------------------------------------
// interface order {
//     (custID : number, orderID : number) : boolean 
// }

// const orderFn : order = (cID, oID) => {
//     console.log("Processing order");
//     return true;
// }

// orderFn(123,543) ? console.log("Order processed successfully") : console.log("Order failed");
// ;

//----------------------------------------

// interface search{
//     (element : string) : boolean; 
// }

// const arr : Array<string> = ["Vignesh","Rithik","testing"]

// const searchFn : search = ele => {
//     return arr.filter(data => data === ele).length > 0;
// }
// const inputValue : string = prompt("Enter the value")  
// searchFn(inputValue) ? console.log(`${inputValue} found`) : console.log(`${inputValue} not found`);


// ------------- extends interface ------------

interface person {
    name : string;
    age : number;
    phone_no : number;
    DOB : Date;
    email : string;
    address : string;
}

interface Salary {
    salary : number
}

interface Employee extends person, Salary {
    emp_ID : number;
    role : string;
    dept : string;
    workingStatus : "Active" | "Inavtive";
}

const EmployeeDetails : Employee = {
    emp_ID : 1234,
    role : "Developer",
    dept : "Software Developer",
    workingStatus : "Active",
    name : "Vignesh Rithik",
    age : 25,
    phone_no : 989887565,
    DOB : new Date ('21/02/1997'),
    email : "abc@gmail.com",
    address : "Chennai",
    salary : 100000
}