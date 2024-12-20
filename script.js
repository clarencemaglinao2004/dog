document.getElementById("fetch-button").addEventListener("click", fetchImage);

function fetchImage() {
    const apiUrl = "https://random.dog/woof.json";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url; 
            const imageContainer = document.getElementById("image-container");

            imageContainer.innerHTML = ""; 

            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Random Dog Image";
            img.style.maxWidth = "100%";
            img.style.maxHeight = "400px";
            img.style.width = "auto";
            img.style.height = "auto";

            imageContainer.appendChild(img);
        })
        .catch(error => {
            console.error("Error fetching random dog image:", error);
        });
}
