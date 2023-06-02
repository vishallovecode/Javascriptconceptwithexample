// // shift and unshift ??
 

// const  array = [1,2,3,45,6];
// const array2 = array.unshift("vishal" , "newton");
// console.log(array2); // 



// array.shift(1,2,34);
//  console.log(array)


// // unshift is modfied the original array by adding element into the beginning of the array




// // delcrative and imperative programming

// // imperative approach
// const arrayData = [1,3,4,5,6,7,8];
// for(let i =0;i<arrayData.length;i= i+3) {
//     console.log(arrayData[i])
// }


// // declrative approach





//  const printMultiplyOfArray = (value , index , array) => {
//     console.log("data" ,value*2)
//  }

//  arrayData.forEach(printMultiplyOfArray); // prototype

//  myforEach(printMultiplyOfArray ,arrayData)

//  function myforEach(callbackFunc, array) {
//     for(let  i =0;i<array.length;i++) {
//         callbackFunc(array[i] , i , array)
//     }
//  }





// //  is map declarative or imperative ?

// const maped = [1,2,3,4,45,5,56];
// const mapData = maped.map((value , index, array)=>{
//     return value*2;
// })

// console.log('mapData' , mapData);


// // My own map

//  const hocMap = (callbackfunc , array) => {
//     const result  = [];
//     for(let  i =0;i<array.length;i++) {
//         result.push(callbackfunc(array[i] , i , array))
//     }
//     return result;
//  }

//  const hocCallBack = (value , index , array) => {
//     return  {
//         [index]: value
//     };
//  }
//  const myMapData = hocMap(hocCallBack ,maped );
//  console.log('myMapData' , myMapData);
// console.log(myMapData)
// const a = {
// name: "Vishal" ,
// mobile: '9915378881',
// college: "Newton"
// };

// console.log(a.name);
// console.log(a['name']);

// a.city = "Kanpur"
// console.log(a)
// a.true = "True";
// a[1] = "True";
// // 
// a["college name"] = "NEWTON";

// const chimchom = "Country";
// a.chimchom = "Autralia"

// a[chimchom] = "India"
// console.log(chimchom);



// try catch  


//  let f =20;
// try {
//     f =30;
//     throw (2);
// } catch(a) {
//     console.log(f)    //  30
    
//     f = 40;
// }
// console.log(f)  // 40






let a = 50;
var b = 40;
{
  console.log(b); //  90
//   console.log(a);   a cannot access before initialization
  var b = 90;
  let a = 200; 
  function call() {
    // console.log(b);  //  a cannot access before initialization
    console.log(a); // 65
    let b = 55;
    var a = 65;
    console.log(a);//65
    console.log(b); // 55
  }
  call();
  console.log(a); //200 
  console.log(b); // 90
}
console.log(a); // 50
console.log(b); // 90

// chetan =>//  90  error  error  65  65  55  200  90  50 90
// digvijay  =>  40 error error undefined 65 55 200 90 50 90


const obj = {};
 obj.college = "newton";
 console.log(obj)
 console.log(obj.college)


const array  = [1,1,1,1,1,2,2,2,2,4,4,44,44,44,5,5,5,5];
let sum = 0;
for(let i =0;i<array.length;i++) {
  sum = sum+array[i];
}

console.log('sum' , sum)
const addArray = (acc, currentValue) => {
    return  currentValue+acc;
}

const result = array.reduce(addArray)

console.log('result' , result)


// multiply the element of array using reduce


const array1  = [1,1,1,1,1,2,2,2,2,4,4,5,5,5,5,44,44,44];
array1.sort((a,b)=> a-b);
console.log(array1)
const object ={};
let count =1;
for(let  i =0;i<array1.length-1;i++) {
  if(array1[i] ==array1[i+1]) {
    count++;
  }   else {
    object[array1[i]]= count;
    count =1;
  }
}
object[array1[array1.length-1]]= count;

console.log(object)


// formatFunction(array1);
const calculateFrequency = (acc , currentvalue)=> {
    if(acc.hasOwnProperty(currentvalue)) {
      acc[currentvalue]++;
    } else {
      acc[currentvalue] =1;
    }
  return acc;
}


Array.prototype.myReduce = function(callbackFunction  , initial) {
  this.forEach((elem)=>{
    initial = typeof initial !== undefined ? callbackFunction(initial, elem) :  elem;
  })
  return initial;
}


const resultObj = array1.myReduce(calculateFrequency  ,"hi");


const sum2   = array1.reduce((prev , curr)=>{
  return prev*curr;
} , 0 )

console.log(sum2)


const students = [
  { name: "Ram", scores: [80, 95, 60] },
  { name: "Mohan", scores: [85, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [95, 90, 94] },
  ];

    
  let average = students.map((element , index)=>{
    console.log(element)
  const s = element.scores.reduce((acc, current)=> acc+current);
  return   {
    name: element.name,
    average: s/element.scores.length
  }
  }).filter((obj, index)=> obj.average>90);


 
  const res = average.filter((obj,index)=> obj.average>90);

  
  

  
  
 
  


 

  
