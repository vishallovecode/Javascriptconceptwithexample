

// // //  console.log(callMe)   
// // //  console.log(callMe())  


// // const callMe =  function  () {
// //     console.log("Hey call me") // 
// // }



// // const data =  callMe();

// // console.log(data);  




// // Try and catch

// var a =30;
// console.log(this.a);   // 
// console.log(window.a) //
// console.log(a) //



// let b =30;
// console.log(this.b);   // 
// console.log(window.b) //
// console.log(b) //

// // in global execution context global memory this and window will point to the same object

// // var scope is functional scope
// // let scope is block scope


 
 {       var scopeFinal = "final1";
        let block = "Scope";
        console.log(block) //  scope
        console.log(scopeFinal) //  final1
 }
 

 let p ="ppp"
 const  checkMe = function () {
    var scopeFinal = "final2";
    let a =30;
    console.log(scopeFinal); // final2
 }

 checkMe();
 console.log(scopeFinal) //  final1
 console.log(block); //  error




// const data  = function callME() {
//    console.log("Hey");
// }


// Arrow functions
// Normal Function 
// Anonymous Function 
// First class function
// IIF (immediately onvokde functions)
// function expression 
// function declaration
// CallBack funvtion




 // let and const get the diffrent memory unlike var sometimes it is in  inside (script scope ) you cannot access this  variable until 
//  you initialed it , the interval to declare to initialed is call tdz

 


