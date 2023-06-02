



// Arguments 
// function callMe1  (arg1 , arg2) {
// console.log(arguments) // list of the arguments here 
// const a = arguments[0];
// const b = arguments[1];
// console.log(a ,b)
// console.log(arg1,arg2)
// console.log(typeof arguments) // 
// }


// const callMe = ()=>{
//  console.log(typeof arguments) // arguments
// }



// callMe1(()=>{
//     console.log("hey")
// });

// callMe("winning")




// this  



// const arrowFunction = () => {
//     console.log(this);
// }



//  function normalFunction() {
//      console.log(this)
//  }




//  arrowFunction.call({name: 'chimchom'})
//  normalFunction.call( )


// Anonymous function
// function with empty name or does not have any name 

// const value = (func1)=> {
//      func1();
//  }
 
// //  const func = ()=>{
// //     console.log("I am first class function example  and also callback function example and also anonymous function")
// //  }
 
//  value( ()=>{
//     console.log("I am first class function example  and also callback function example and also anonymous function")
//  } )

 
// Immediately Invoked functions 


// (
//  ()=> {
//         console.log(" iif with anonymous arrow function")
//     }
// )();

// (
//     function check() {
//         console.log("iif with name")
//     }
// ) ();

// (
//     function (a ,b) {
//         console.log("iif with normal anonymous fucntion" , a,b)
//     }
// ) ("name" , "hey")


//Array join 

const array  =[1,2,3,4,5];


console.log(array.join(" "))


 