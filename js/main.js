console.log("JS TEST");

let leData = document.getElementById("leData");

// inventory.forEach(function(item, index){
//     console.log("items", item, index);
//     leData.innerHTML += `<li class="cards">${item.face}: ${item.symbol}</li>`
// });

inventory.forEach( (item, index) => {
    console.log("items", item, index);
    leData.innerHTML += `<li class="cards">${item.face}: ${item.symbol}</li>`;
});

let getCards = document.getElementsByClassName("cards");
console.log("cards", getCards);
console.log("card item", getCards[0].innerHTML);

const howmanyCards = () => {
    return inventory.length;
};

const getHowManyCards = () => {
    return inventory.length;
};

const totalNumberCards = () => {
  var count = getHowManyCards();
  console.log("Get Deck Amount:", count);  
};

let btnCardAmount = document.getElementById("btnCardAmount");
btnCardAmount.addEventListener("click", totalNumberCards);





// === NEW SECTION ===
function Cards(face, symbol, color){
    this.face = face;
    this.symbol = symbol;
    this.color = color;
    this.stamp = function (){
        let cardTemp = 300;
        if (this.color === "Red"){
            cardTemp = 350;
        } else if (this.color === "Black"){
            cardTemp = 375;
        }
        return cardTemp;
    }
}

function addNewOne(){
    inventory.push(new Cards("Queen", "Clubs", "Black"));
    console.log("New Card", inventory);
}
let addNewCard = document.getElementById("btnNewCard").addEventListener("click", addNewOne);

function makeCard(face, symbol, color){
    return new Cards(face, symbol, color);
}

function addNewCard2 () {
    inventory.push(makeCard("4", "Hearts", "Red"));
    console.log("New Card[2]", inventory);
    showDeck();
};

function showDeck (){
    inventory.forEach((item, index) => {
        document.getElementById("new-version").innerHTML += `<li>${item.face}: ${item.symbol}</li>`;
    });
}
let btnNewCard2 = document.getElementById("btnNewCard2").addEventListener("click", addNewCard2);

let newInventory = [];
function makeNewInventory(){
    inventory.forEach((item, index) => {
        newInventory.push(makeCard(item.face, item.symbol, item.color))
    });
}
makeNewInventory();

const createCard = () => {
    let item = newInventory[0];
    let cardTemp = item.stamp();
    console.log("Item Chosen", item,"Card Temp", cardTemp);
}

let btnCardStamp = document.getElementById("btnCardStamp").addEventListener("click", createCard);