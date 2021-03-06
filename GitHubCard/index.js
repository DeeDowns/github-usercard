import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<DeeDowns>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const cards = document.querySelector('.cards')


const myGitHubURL = 'https://api.github.com/users/DeeDowns'

axios.get(myGitHubURL)
  .then(function (value) {
    // console.log(value.data);
    let newCard = value.data
    cards.appendChild(cardMaker(newCard))
  })
  .catch(function (error) {
    console.log(error)
  })

  /*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = [
  'tetondan',
  'cladams0203',
  'dustinmyers',
  'justsml',
  'bigknell',
  'luishrd'
];


const user1 = 'https://api.github.com/users/tetondan'

console.log(followersArray)

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(function (value) {
    // console.log(value)
    const userCard = value.data;
    cards.appendChild(cardMaker(userCard))
    
  })
  .catch(function (error) {
    console.log(error)
  })

})



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj) {

  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name= document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('a');
  const githubA = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  
  card.className = 'card';
  cardInfo.className = 'card-info';
  name.className = 'name';
  username.className = 'username';

  img.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = 'Profile:'
  githubA.href = obj.html_url;
  githubA.textContent = obj.url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;


  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(githubA)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  console.log(card)
  return card 
} 

// const myCard = cardMaker(myGitHubURL);
// cards.appendChild(myCard)


