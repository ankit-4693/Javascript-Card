var src =["https://templated.co/items/demos/snapshot/images/thumbs/03.jpg","https://templated.co/items/demos/snapshot/images/thumbs/10.jpg","https://templated.co/items/demos/snapshot/images/thumbs/05.jpg","https://templated.co/items/demos/snapshot/images/thumbs/06.jpg","https://templated.co/items/demos/snapshot/images/thumbs/07.jpg", "https://templated.co/items/demos/snapshot/images/thumbs/09.jpg","https://templated.co/items/demos/snapshot/images/thumbs/03.jpg","https://templated.co/items/demos/snapshot/images/thumbs/10.jpg"];
function createCard() {
  var card = document.createElement("DIV");
  card.setAttribute("class", "card");
  var gallerydata = document.getElementsByClassName("gallery_content");
  gallerydata[0].appendChild(card);
  var cardimg = document.createElement("IMG");
  cardimg.setAttribute("src", src[i]);
  cardimg.setAttribute("width", "250");
  cardimg.setAttribute("height", "228");
  cardimg.setAttribute("alt", "The Card");
  var card = document.getElementsByClassName("card");
  card[i].appendChild(cardimg);
  var cardinfo = document.createElement("DIV");
  cardinfo.setAttribute("class", "card_info");
  var name = document.createElement("h4");
  name.textContent = "Ankit Mittal";
  designation = document.createElement("p");
  designation.textContent = "DevOps Engineer";
  cardinfo.appendChild(name);
  cardinfo.appendChild(designation);
  card[i].appendChild(cardinfo);
}

for(i = 0; i < src.length; i++)
{
  createCard();
}