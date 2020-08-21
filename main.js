let cards = [];

let addCard = document.getElementById("add-card");

function addCardData(cards){
    let out= "";
    for(let card of cards){
        let img = Math.floor(Math.random() * 12)  + 1;
        out +=`
            <div class="w3-card card" >
                <img src="./img/${img}.jpg" alt="">
                <div class="info"><span class="yellow">Name: </span> ${card.name}</div>
                <div class="info"><span class="green">Course: </span> ${card.course}</div>
                <div class="info"><span class="red">Author: </span> ${card.author}</div>
            </div>
        `;
      }

    addCard.innerHTML = out;  
}

document.getElementById("add-form").addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault();

    let card = {
        name: null,
        course: null,
        author: null
    };
  
    for(let item of event.currentTarget){
  
      if(item.name === 'name'){
        card.name = item.value;
      }
  
      if(item.name === 'course'){
        card.course = item.value;
      }
  
      if(item.name === 'author'){
        card.author = item.value;
      }
    }

    cards.push(card);
    event.currentTarget.reset();
    addCardData(cards)
  }