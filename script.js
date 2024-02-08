let searchButton = document.getElementById("search-btn");

searchButton.addEventListener('click', (event) => {
    let searchInput = document.getElementById("search-input")
    let searchValue = searchInput.value;
    showImages(searchValue);
} )


function showImages(query) {
    

    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {Authorization: "zGMxWymCnuNcNHKuvVIAQhcmYIMaFgrUJVVERebbrBQL0ICrgxAiVfjy"}
    
    })
    .then((response) => response.json())
    .then((result) => {
        let photos = result.photos
    
        let cards = photos.map((element) => {
            let cardContainer = document.createElement("div");
            cardContainer.classList.add("col-sm-6", "col-md-4", "px-2", "pt-3");
                
            let card = document.createElement("div");
            card.classList.add("card", "px-2");
                
            let images = document.createElement("img");
            images.classList.add("card-img-top");
            images.setAttribute("src", element.src.medium);
            images.setAttribute("class", "img-child")

            let row = document.getElementById("row")
            row.appendChild(cardContainer)
            cardContainer.appendChild(card)
            card.appendChild(images)
        })
        return cards
            
    })
    .catch(err => console.error(err));
}
