// API Access frontend
const BASE_URL = 'http://localhost:3000'
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
    fetch(`${BASE_URL}/blog/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogBost)
        })
        .then(response => response.json())
        .then(data => {
            if(data) {
                const {content} = blogBost
                blogBost.description = content
                delete content
                createPostCard(blogBost);
            }
        })
        .catch(error => console.error(error))
    // createPostCard(blogBost);
    form.reset();
});
const feed = document.querySelector('#feed');
// let myFeed = document.getElementById('feed');
function createPostCard(post) {
  let cardHolder = document.createElement('div');
  let cardContent = document.createElement('div');
  let postHeader = document.createElement('span');
  let postAuthor = document.createElement('p');
  let postContent = document.createElement('p')

  // add data
  postHeader.textContent = post.title;
  postAuthor.textContent = post.author;
  postContent.textContent = post.description;

  // add styles
  postHeader.className ='card-title';
  cardHolder.className = 'card';
  cardContent.className = 'card-content';

  // set id
  cardHolder.setAttribute('id', post._id)

  // shape up the card
  cardContent.appendChild(postHeader);
  cardContent.appendChild(postAuthor);
  cardContent.appendChild(postContent);
  cardHolder.appendChild(cardContent);

//   console.log('final card>>>', cardHolder);
feed.appendChild(cardHolder);

}

form.style.padding = '12px';


// console.log(getAuthor('armstrongsouljah@gmail.com'))
// window.addEventListener('mousemove', e=> {
//     // e.preventDefault();
//     // console.log(e)
//     console.log(e.offsetX, e.offsetY)
// })

// input events
const checkBox = document.querySelector('#remember');

checkBox.addEventListener('change', function(e){
    e.preventDefault();
    e.target.value = !e.target.checked;
    // console.log(e.target.checked);

})


fetch(`${BASE_URL}/blog/`)
  .then(response => response.json())
  .then(data => {
      data.posts.forEach(post => {
          createPostCard(post)
      })
  });
