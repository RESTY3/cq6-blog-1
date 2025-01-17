// accessing elements on the page
//access using css class
let buttons = document.getElementsByClassName('btn');
console.log(buttons)


// access elements using element id
let byId = document.getElementById('second');
let byId2 = document.getElementById('seconds'); //  this fails since we have no ID of seconds


// access by tagName
let allH3s = document.getElementsByTagName('h3');
// console.log(allH3s)

// single element querySelector
console.log(document.querySelector("#second"));
console.log('first btn ', document.querySelector(".btn"));


// all items using querySelectorAll
console.log('every btn', document.querySelectorAll(".btn"));
let inputElem = document.querySelector("input[type='email']");

// blogDatabase
const posts = [];

// simple form processing
const form = document.querySelector("form");
let email = form.email;
let content = form.content;
let title = form.title;

// process email and get author
function getAuthor(email) {
    return email ? email.substring(0, email.lastIndexOf('@')): '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();  // stop operations until i say so


    let blogBost = {
        author: getAuthor(email.value),
        title: title.value,
        content: content.value
    }

    // console.log('submited', blogBost)
    const posts =[blogBost]
    console.log('sunmitted', posts)
})


// console.log(getAuthor('armstrongsouljah@gmail.com'))

 


