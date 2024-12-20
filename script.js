document.getElementById("fetch-button").addEventListener("click", fetchImage);

function fetchImage() {
    const baseImageUrl = "https://random.dog/4436608b-f463-48b4-8026-8f29f036195b.jpg";

    const imageUrl = `${baseImageUrl}?t=${new Date().getTime()}`;

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
}
