
const userKm = 20;
const userAge = 30;
const priceForKm = 0.21;
const totalPrice = userKm * priceForKm;
let discount;
let finalPrice;
let visualDiscount;
const numberCarriage = Math.floor((Math.random() * 10) + 1);

if (userAge >= 65) {
  discount = 0.4;
  visualDiscount = "Biglietto Over 65";
}  else if (userAge <= 17) {
  discount = 0.2;
  visualDiscount = "Biglietto Under 18";
} else {
  discount = 0; 
  visualDiscount = "Biglietto Standard";
}

finalPrice = totalPrice * (1 - discount);

// const age = `
// Ciao, oggi hai scelto di percorrere ${userKm}Km per raggiungere il posto dei tuoi sogni.
// `;

// // document.getElementById("hello").innerHTML = age;

document.getElementById("type-discount").innerHTML = visualDiscount;
document.getElementById("price").innerHTML = finalPrice.toFixed(2) + "€";
document.getElementById("carriage").innerHTML = numberCarriage;






