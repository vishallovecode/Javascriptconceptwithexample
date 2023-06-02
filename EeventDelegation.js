
// function grandParent (e , message) {
//     console.log(e.target.value) // this will tell you where user have clicked
//     console.log(e.target === e.currentTarget) // true
//     window.location ='https://my.newtonschool.co/dashboard/'
// }

// function addData (event, id) {
//     console.log('data successFullt added')
//     const button  = document.getElementById('12345');
//     console.log(button)
//     event.stopPropagation()
// }

// function addMe(event) {
//     console.log('hey add me')
// }

function clickMe (e) {
    e.stopImmediatePropagation()
    console.log("Click me First")
}

function clickM2 () {
    console.log("Click me second")

}

function parentCall() {
    console.log("ParetnCall")
}

const button2 =document.getElementById('234567');

button2.addEventListener('click', clickM2)

button2.addEventListener('click', clickMe)





console.log(+false); // 0
console.log(new Boolean(-Infinity)) //   0 and -0
console.log(new Boolean(-0)) //   0 and -0 explicitly type cohersion

// type cohersion


















for(var  i = 0;i<5;i++) {
  setTimeout(()=>{
    console.log(i);
  } , 1000)
}


for(let i=0;i<5;i++) {
    setTimeout(()=>{
        console.log(i);
      } , 1000)
}

// 1 2 3 4 5





