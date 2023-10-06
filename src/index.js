// Define the URL for fetching dog images
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// Function to fetch and add dog images to the DOM
function fetchAndAddDogImages() {
  // Make a GET request to the imgUrl
  fetch(imgUrl)
    .then((response) => {
      // Check if the response status is OK (200)
      if (response.ok) {
        // Parse the response as JSON
        return response.json();
      } else {
        throw new Error("Failed to fetch dog images");
      }
    })
    .then((data) => {
      // Get the array of dog image URLs from the response data
      const dogImages = data.message;

      // Get the container div where you want to add the images
      const dogImageContainer = document.getElementById("dog-image-container");

      // Loop through the array and create image elements
      dogImages.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;

        // Append the image to the container
        dogImageContainer.appendChild(img);
      });
    })
    .catch((error) => {
      console.error(error);
    });


    // Define the URL for fetching dog breeds
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// Function to fetch and add dog breeds to the <ul> element
function fetchAndAddDogBreeds() {
  // Make a GET request to the breedUrl
  fetch(breedUrl)
    .then((response) => {
      // Check if the response status is OK (200)
      if (response.ok) {
        // Parse the response as JSON
        return response.json();
      } else {
        throw new Error('Failed to fetch dog breeds');
      }
    })
    .then((data) => {
      // Get the breeds data from the response
      const breeds = data.message;

      // Get the <ul> element where you want to add the breeds
      const breedList = document.getElementById('dog-breeds');

      // Loop through the breeds and add them as list items to the <ul>
      for (const breed in breeds) {
        const listItem = document.createElement('li');
        listItem.textContent = breed;

        // Append the list item to the <ul>
        breedList.appendChild(listItem);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the function to fetch and add dog breeds when the page loads
window.addEventListener('load', fetchAndAddDogBreeds);

}

// Call the function to fetch and add dog images when the page loads
window.addEventListener("load", fetchAndAddDogImages);

// Function to filter dog breeds based on the selected letter
function filterDogBreeds(letter) {
  const breedList = document.getElementById('dog-breeds');
  const breeds = breedList.getElementsByTagName('li');

  for (const breed of breeds) {
    const breedName = breed.textContent.toLowerCase();

    // Check if the breed name starts with the selected letter
    if (breedName.startsWith(letter)) {
      breed.style.display = 'block'; // Show the breed
    } else {
      breed.style.display = 'none'; // Hide the breed
    }
  }
}

// Event listener for when the dropdown value changes
const breedDropdown = document.getElementById('breed-dropdown');
breedDropdown.addEventListener('change', () => {
  const selectedLetter = breedDropdown.value;
  filterDogBreeds(selectedLetter);
});

// Call the filterDogBreeds function to initially show all breeds
filterDogBreeds(breedDropdown.value);


        
console.log('%c HI', 'color: firebrick')

