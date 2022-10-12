const btnInput = document.getElementById("btn-input");
btnInput.addEventListener("click", ticketParameters);

function ticketParameters() {
  const name = document.getElementById('name-input').value;
  document.getElementById('output-name').innerHTML = name.toUpperCase();
  const userKm = document.getElementById('km-input').value;
  const userAge = document.getElementById('age-input').value;
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
  document.getElementById("type-discount").innerHTML = visualDiscount;
  document.getElementById("price").innerHTML = finalPrice.toFixed(2) + "€";
  document.getElementById("carriage").innerHTML = numberCarriage;
}










