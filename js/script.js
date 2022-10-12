const btnInput = document.getElementById("btn-input");
btnInput.addEventListener("click", ticketParameters);

function ticketParameters() {
  const name = document.getElementById('name-input').value;
  document.getElementById('output-name').innerHTML = name.toUpperCase();
  let userAge = document.getElementById("framework").value;
  const userKm = document.getElementById('km-input').value;
  const priceForKm = 0.21;
  const totalPrice = userKm * priceForKm;
  const numberCarriage = Math.floor((Math.random() * 10) + 1);
  let discount;
  let visualDiscount;
  
  if (userAge === "over65") {
    discount = 0.4;
    visualDiscount = "Tariffa Over 65";
  }  else if (userAge === "under18") {
    discount = 0.2;
    visualDiscount = "Tariffa Under 18";
  } else if (userAge === "standard") {
    discount = 0; 
    visualDiscount = "Tariffa Standard";
  }

  let finalPrice = totalPrice * (1 - discount);
  document.getElementById("type-discount").innerHTML = visualDiscount;
  document.getElementById("price").innerHTML = finalPrice.toFixed(2) + "€";
  document.getElementById("carriage").innerHTML = numberCarriage;
  document.getElementById("cp-code").innerHTML = "17458";
}

const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", function() {
  document.querySelector("#name-input").value = "";
  document.querySelector("#km-input").value = "";
  // document.querySelector("#age-input").value = "";
  document.getElementById("type-discount").innerHTML = "-"
  document.getElementById("price").innerHTML = "-";
  document.getElementById("carriage").innerHTML = "-";
  document.getElementById("cp-code").innerHTML = "-";
  document.getElementById('output-name').innerHTML = "-";
});












