

const employee = 
[{"name":"John","age":30,"department":"HR","salary":50000},
{"name":"Jane","age":28,"department":"IT","salary":60000},
{"name":"Mark","age":35,"department":"HR","salary":55000},
{"name":"Alice","age":32,"department":"Finance","salary":65000},
{"name":"Charlie","age":40,"department":"IT","salary":70000}]





function performEmployeeOperations(employees) {

    // Find employee with the highest salary
    const highestSalaryEmployee = employees.reduce((acc, emp) => emp.salary > acc.salary ? emp : acc, employees[0]);
  
    // Group employees by department
  const employeesByDepartment = employees.reduce((acc, current)=>{
      if(!acc[current.department]) {
          acc[current.department] = [];
      } 
      acc[current.department].push(current);
      return acc;
  } ,{}); 
  
  
    // Calculate average age of employees in each department
  
  let averageAgeByDepartment = {} ;
  
  for(let i in employeesByDepartment) {
     let totalAge= employeesByDepartment[i].reduce((acc , current)=> {
      return acc+current.age;
      } , 0)  
      averageAgeByDepartment[i] =  totalAge/employeesByDepartment[i].length
  }
  
    // Find employee(s) with the longest name(s)
  const len = employees.map((emp)=> emp.name.length);
  const employeesWithLongestName = Math.max(...len)
  
    return {
      highestSalaryEmployee,
      employeesByDepartment,
      averageAgeByDepartment,
      employeesWithLongestName
    };
  }
  
  


  
  performEmployeeOperations(employee)




  const data  =  [1,2,3,4,5];

for (let i in data) {
  console.log(typeof i)
}



  // delcarative
  // var filter = function(arr, fn) {

  //   let a = [];
    
  //   for (let i in arr) {
    
  //   if(fn(arr[i], i , arr)) a.push(arr[i]);
    
  //   }
    
  //   return a;
    
  //   }
     

  //   // imperative approcah
  //   var filter = function(arr, fn){
    
  //   let a = [];
    
  //   for (let i = 0; i < arr.length; i++) {
    
  //   if(fn(arr[i], i)) a.push(arr[i]);
    
  //   }
    
  //   return a;
    
  //   };






let object = {
  store:{
    state:{
      city: {
        district: {
          name: "Bangalore"
        }
      }
    }
  }
}


// i want to change the  value of name  ?? 

// object  = {
//   ...object,
//   ...object.store,
//   ...object.store.state.city,
//   ...object.store.state.city.district,
//   name: "Kanpue"
// }
// console.log(object)

// const getByString = (object , 'store.state.city1.name') => {
// // lofic
// }



const getByString = (object , keys) => {
  const key  =  keys.split('.');  // ['store' ,'state' , 'city' ,'district' , 'name'];
  let result ;
  for(let value of key) {
       result  = object[value];
       if(result  &&typeof result==='object' ) {
        object=result;  
       }
       else {
        return result;
       }
  }
  return result
}
const value  = getByString(object ,'store.state.city2.district.name' ); //bangalore

console.log(value)


cat  ="Chintu"
// console.log(cat)
var cat;


// // tell me diff b/w undefined and not defined

// // difference b/w function declaration and function expression

(
  function(){
     var a=b=3;
  }
)();

console.log('a==>' ,typeof a); // number
console.log( 'b==>' ,typeof b); // number












function abc  () {
  return {
    name1:"Hello"
  }
}


function abc1  () {
  return  {
    name1:"Hello"
  }
}

console.log(abc()) // undefined
console.log(abc1())  //  { name1:"Hello"}




cat  ="Chintu"
console.log(cat)
var cat;


