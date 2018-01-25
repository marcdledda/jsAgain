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