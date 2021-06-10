// List of breeds
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

// Random dog of one breed
let breed_url = "https://dog.ceo/api/breeds/image/random";

let listBreeds = document.querySelector('#select-breed');
// listBreeds.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose Breed';

// listBreeds.add(defaultOption);
// listBreeds.selectedIndex = 0;

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

// breed_url = `${breed_url}${key}/images/random`;


const doggos = document.querySelector('.doggos-container');

// Shows a dog when an option is selected
function showADog() {
    const promise = fetch(breed_url);
    promise.then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processedResponse) {
        const oneDog = document.createElement('img');
        oneDog.src = processedResponse.message;
        oneDog.alt = "Cute doggo";
        doggos.appendChild(oneDog);
    });
}

addBreeds();
// listBreeds.addEventListener('click', addBreeds);

listBreeds.addEventListener('change', function (e) {
    console.clear();
    if (e.target.className === 'breed-selected') {
        let breedSelected = e.target.innerText;
        console.log(breedSelected);
    } else {
        console.log('no breed selected');
    }
    
})