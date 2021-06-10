// List of breeds
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

// Piece of the needed url to show a dog from an specified breed
let breed_url = "https://dog.ceo/api/breed/";

let listBreeds = document.querySelector('#select-breed');

const doggos = document.querySelector('.doggos-container');

function addBreeds() {
    const promise = fetch(BREEDS_URL);
    promise.then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processedResponse) {
        const object = processedResponse.message;
        
        // Converting response into an array
        const breeds = Object.entries(object);

        let breed;
        // console.log(breeds);
        breeds.forEach(([key]) => {
            breed = document.createElement('option');
            breed.className = 'breed-selected';
            breed.value = key;
            breed.text = key;
            listBreeds.insertAdjacentElement('beforeend', breed);
        });
    });
}

// Populate the select with the breeds gotten from the API
addBreeds();

// Get the value of the option selected and add the string to breed_url
listBreeds.addEventListener('change', function (e) {
    console.log(e.target.value);
    breed_url = `${breed_url}${e.target.value}/images/random`;

    // Shows a dog when a breed is selected
    showADog(breed_url);

    // Update the url
    breed_url = "https://dog.ceo/api/breed/";
});

function showADog(url) {
    const promise = fetch(url);
    promise.then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processedResponse) {
        let oneDog = document.createElement('img');
        oneDog.className = 'loading';
        oneDog.src = processedResponse.message;
        oneDog.alt = "Cute doggo";
        doggos.appendChild(oneDog);
    });
}