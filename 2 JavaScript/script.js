// // console.log("hellow world");
// let myFirstVariable = 293;
// {
//     myFirstVariable = 123;
//     console.log(myFirstVariable)
// }
// console.log(myFirstVariable)

// const myAge = 11;
// const myName = "utu";
// const trueF = true;
// const bigNumber = 64231321;
// const friends = [11, true, "utkarsh"];
// // friends.push(12)
// console.log(friends[3])



// // Mathematical operator
// let age = 19;
// age++;
// console.log(age);


// // Fuctions 

// function makeConsole(myAge, myName) {
//     console.log("hi m function");
//     console.log("my name is ", myName);
//     console.log("my age is ", myAge);
// }
// makeConsole(myAge, myName);


// // if else

// function drive(age) {
//     if (age < 18) {
//         console.log("na beta");
//     }
//     else {
//         console.log("aaja beta gadi chalale");
//     }
// }

// drive(myAge)


// // Arrays
// let myfriend = []
// function addFriend(friend) {
//     myfriend.push(friend)
//     console.log(myfriend)
// }

// addFriend("utkarsh")
// addFriend("no no no")

// // Objects
// let obj = {
//     car: {
//         name: "ritz",
//         cc: 1200,
//     },
//     name: 'utkarsh',
//     age: 12,
// }

// obj['place'] = 'chinchwad';
// console.log(obj)
// console.log(obj['age']);

// console.log(obj.car['cc']) //nested obj elements



// // call by referance.
// // call by address.
// const mypro = {
//     name:'utu',
//     age:124
// }

// const secondPro = {
//     name:'john',
//     age:42
// }
// function primitiveMutate(primatve){
//     primatve++;
//     console.log(primatve);
// }

// function mutate(obj) { 
//     console.log(obj.age)
// }

// mutate(mypro)

// let num = 100;
// primitiveMutate(num);
// console.log(num);


// // Scoping
// // variable life is inside of scope.
// const a = 123;

// function scop(){
//     const hello = 'hello'
//     console.log("this is global scop value ",a);
// }
// scop()




// document object model (DOM)

console.log(document)

// querySelector

const heading = document.querySelector('#hello')
heading.innerText = 'Changed'
console.log(heading)



// queryselectorAll

const all = document.querySelectorAll('li')
console.log(all)
for (let i = 0; i < all.length; i++) {
    const listItem = all[i];
    listItem.innerText = 'yooo'
}

// document.getElementById

const para = document.getElementById('para').innerText
console.log(para);

// CreateElement

const ulElement = document.getElementById('list-item')

// eventListener

const incrementbtn = document.querySelector('#increment');
const counterEl = document.getElementById('counter');
let counter = 0;

incrementbtn.addEventListener('click', () => {
    counter++;
    counterEl.innerText = counter
    
    // createElement
    const li = document.createElement('li')
    li.setAttribute('data-counter',counter)
    if(counter%2==0){
        // li.setAttribute('class','yellow')
        // or
        li.style.background = 'yellow'
        li.style.padding = '30px'
    }
    else{
        li.setAttribute('class','red')
    }
    li.innerHTML = "<b>Something</b>" +counter
    console.log(li)
    // Append child
    ulElement.appendChild(li)
})

const decrement = document.querySelector('#decrement');

decrement.addEventListener('click',()=>{
    const li = ulElement.querySelector('[data-counter]="'+counter+'"]')
    li.remove()
    counter--;
     counterEl = document.getElementById('counter');
     counterEl.innerText = counter;
})



// es6 class features

