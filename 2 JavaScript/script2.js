// destructuring syntax
// 
const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7];
const arr3 = [...arr1, ...arr2]; //destructuring arr1, arr2
// we can murge both array to arr3
console.log(arr3)

const obj1 = {
    name: 'utu'
}

const obj2 = {
    name: 'hrushi',
    age: '12',
}

const obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)



// arrow function
function likeThis() {
    return 1
}

const aFunctionLikeThis = () => {
    return 2
}


// array functions

const obj4 = [
    {
        name: 'pu'
    },
    {
        name: 'uu'
    }
]

//MAP
const arr = [1, 2, 3, 4, 5, 6];
const returnarray = arr.map((element) => {
    console.log(element)
    return element ** 2
})
console.log(returnarray)

// Filter
const arr5 = [1, 2, 3, 3, 5, 6, 7, 8]
const arr5return = arr5.filter((ele) => ele > 5)
console.log(arr5return)


// FIND
const name = obj4.find((ele) => ele.name === 'pu')
console.log(name)

// FOREACH




// template literals

const aboutMe = `as jfasf 
asd f
as
d f
asd fasd
 fa
 sdf 
 as
 f
 asf `
console.log(aboutMe)



//  PROMISES and FETCH

// Promise  =>  Promise is obj in javasxript which promises to resolve to a value in future
// Promise => Promise is obj which promises the value sometime in future it might in seconds or in minitus etc...

// fetch is API from browser which returns you a promise obj.

const promiseObject = fetch("data.json");

const promiseObjectAgain =   promiseObject.then(response => {
    const promiseObject2 = response.json() //converts the data from string to json form
    return promiseObject2
}).then(finaldata =>{
    console.log('final data is', finaldata)
})
