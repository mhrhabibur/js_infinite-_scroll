const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];

const count = 10;
const apiKey = 'cr1WPsVDN9gLn2MMKMzO2x-4x4EQMRHbW5a7TfgUC2M';

const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
    photoArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        item.appendChild(img);
        imageContainer.appendChild(item);
     });
}

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photoArray = await response.json();
        displayPhotos();
    } catch (error) {
       console.error("Unsplash API error:", error); 
    }
}

window.addEventListener('scroll', () => { 
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
    }
});


getPhotos();




// const imageContainer = document.getElementById('image-container');
// const loader = document.getElementById('loader');

// let photoArray = [];
// let ready = false;
// let imagesLoaded = 0;
// let totalImages = 0;

// const count = 10;
// const apiKey = 'cr1WPsVDN9gLn2MMKMzO2x-4x4EQMRHbW5a7TfgUC2M';
// const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// // Check if all images were loaded
// function imageLoaded() {
//     imagesLoaded++;
//     if (imagesLoaded === totalImages) {
//         ready = true;
//         loader.hidden = true;
//     }
// }

// function displayPhotos() {
//     imagesLoaded = 0;
//     totalImages = photoArray.length;

//     photoArray.forEach((photo) => {
//         const item = document.createElement('a');
//         item.setAttribute('href', photo.links.html);
//         item.setAttribute('target', '_blank');

//         const img = document.createElement('img');
//         img.setAttribute('src', photo.urls.regular);
//         img.setAttribute('alt', photo.alt_description || 'Image');
//         img.setAttribute('title', photo.alt_description || 'Image');

//         // Event: image loaded
//         img.addEventListener('load', imageLoaded);

//         item.appendChild(img);
//         imageContainer.appendChild(item);
//     });
// }

// async function getPhotos() {
//     try {
//         const response = await fetch(apiURL);
//         photoArray = await response.json();
//         displayPhotos();
//     } catch (error) {
//         console.error("API error:", error);
//     }
// }

// // Infinite scroll listener
// window.addEventListener('scroll', () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
//         ready = false;
//         getPhotos();
//     }
// });

// getPhotos();
