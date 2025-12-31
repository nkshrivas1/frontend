
// const API_KEY = 'AIzaSyDezxI59n6P3Ij3GKE3bHiHUKs2m4CJ9ro'

// const videoContainer = document.querySelector(".card-container")

// async function fetchVideos() {
//     const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&q=technology&type=video&maxResults=8&key=${API_KEY}`
//     );
//     const data = await response.json();
//     console.log(" ~ :11 ~ fetchVideos ~ data:", data)

//     displayVideos(data.items)
// }

// const displayVideos  = (videos) => {
//     videoContainer.innerHTML = "";
    
//     videos.forEach(element => {
//         const card  =document.createElement("div");
//         card.classList.add("card");

//         card.innerHTML = `
//             <img src="${element.snippet.thumbnails.medium.url}" class+"thumbnail">
//             <h4>${element.snippet.title}</h4>
//             <p>${element.snippet.channelTitle}</p>

//         `
//         videoContainer.appendChild(card);
//     });
// }

// fetchVideos()


const getRandomValue = () => { 
    console.log('Randomvalue');
 }

export const getRandomString = () => { }

const getRandomNumber = () => { }

// default
export default getRandomValue;
// normal
export {  getRandomNumber };

