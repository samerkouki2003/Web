(function(){
  "use strict";
  const detailsForm = document.querySelector("#destination_details_form"); 
  detailsForm.addEventListener("submit", handleFormSubmit);
  
  function handleFormSubmit(event) {
      event.preventDefault();
  
      // Daten aus dem Formular extrahieren
      const destName = event.target.elements["name"].value;
      const destLocation = event.target.elements["location"].value;
      const destPhoto = event.target.elements["photo"].value;
      const destDesc = event.target.elements["description"].value;
  
      // Karte basierend auf den Formulardaten erstellen
      const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);
  
      // Karte zum Container hinzufügen
      const wishListContainer = document.getElementById("destinations_container");
      wishListContainer.appendChild(destCard);
  
      // Titel aktualisieren, wenn es die erste Karte ist
      if (wishListContainer.children.length === 1) {
          document.getElementById("title").innerHTML = "My Wish List";
      }
  
      // Formular zurücksetzen
      for (let i = 0; i < detailsForm.elements.length; i++) {
          detailsForm.elements[i].value = "";
      }
  }
  
  function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = "card";
  
    const img = document.createElement("img");
    img.setAttribute("alt", name);
    const constantPhotoUrl = "images/signpost.jpg";
    if (photoURL.length === 0) {
        img.setAttribute("src", constantPhotoUrl);
    } else {
        img.setAttribute("src", photoURL);
    }
    card.appendChild(img); 
  
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);
  
    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle); // Korrektur hier
  
    if (description.length !== 0) {
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }
  
    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";
    
    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn); 
  
    card.appendChild(cardBody); 
  
    return card;
  }
  
  function removeDestination(event) {
    var card = event.target.closest(".card");
    if (card) {
        card.remove();
    }
  }
})();
