const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dogButton = document.querySelector('.dog-btn');
const doggos = document.querySelector('.doggos');

function addNewDog() {
    const promise = fetch(DOG_URL);
    promise.then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processedResponse) {
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        doggos.appendChild(img);
    });
}

dogButton.addEventListener('click', addNewDog)