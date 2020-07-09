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

const cardsEntryPoint = document.querySelector('.cards')
console.log(cardsEntryPoint)

// const card = cardMaker()



const myGitHubURL = 'https://api.github.com/users/DeeDowns'

axios.get(myGitHubURL)
  .then(function (value) {
    console.log(value.data);
    const name = value.data.name;
    const username = value.data.login;
    const location = value.data.location;
    const followersCount = value.data.followers;
    const followingCount = value.data.following;
    const bio = value.data.bio; 
    const profilePic = value.data.avatar_url;
    const profile = value.data.html_url

  })
  .catch(function (error) {
    console.log(error)
  })

  
// const fakeCardData = [{
//   name: 'dee',
//   username: 'deedowns',
//   location: 'fl',
//   followersCount: ''
// }
// ]




function cardMaker(userInfo) {

  const userCard = document.createElement('div');
  const userImg = document.createElement('img');
  const userHeading = document.createElement('h3');
  const userSubHeading = document.createElement('h4');
  const userLocation = document.createElement('p');
  const userProfileLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  userImg.src = userInfo.profilePic;
  userHeading.textContent = userInfo.name;
  userSubHeading.textContent = userInfo.username;
  userLocation.textContent = userInfo.location;
  userProfileLink.textContent = userInfo.profile;
  userProfileLink.href = userInfo.profile;
  userFollowers.textContent = userInfo.followersCount;
  userFollowing.textContent = userInfo.followingCount;
  userBio.textContent = userInfo.bio;

  userCard.appendChild(userImg)
  userCard.appendChild(userHeading)
  userCard.appendChild(userSubHeading)
  userCard.appendChild(userLocation)
  userCard.appendChild(userProfileLink)
  userCard.appendChild(userFollowers)
  userCard.appendChild(userFollowing)
  userCard.appendChild(userBio)

} 

// cardMaker(myGitHubURL)


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
