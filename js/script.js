let userAge;
const AgeInputStandard = document.getElementById("standard-age");
AgeInputStandard.addEventListener("click", function () {
  userAge = document.getElementById('standard-age').value;
  console.log(userAge);
});

const AgeInputUnder = document.getElementById("under-age");
AgeInputUnder.addEventListener("click", function () {
  userAge = document.getElementById('under-age').value;
  console.log(userAge);
});

const AgeInputOver = document.getElementById("over-age");
AgeInputOver.addEventListener("click", function () {
  userAge = document.getElementById('over-age').value;
  console.log(userAge);
});

const btnInput = document.getElementById("btn-input");
btnInput.addEventListener("click", ticketParameters);

function ticketParameters() {
  const name = document.getElementById('name-input').value;
  document.getElementById('output-name').innerHTML = name.toUpperCase();
  const userKm = document.getElementById('km-input').value;
  const priceForKm = 0.21;
  const totalPrice = userKm * priceForKm;
  let discount;
  let finalPrice;
  let visualDiscount;
  const numberCarriage = Math.floor((Math.random() * 10) + 1);

  if (userAge === "over65") {
    discount = 0.4;
    visualDiscount = "Biglietto Over 65";
  }  else if (userAge === "under18") {
    discount = 0.2;
    visualDiscount = "Biglietto Under 18";
  } else if (userAge === "standard") {
    discount = 0; 
    visualDiscount = "Biglietto Standard";
  }

  finalPrice = totalPrice * (1 - discount);
  document.getElementById("type-discount").innerHTML = visualDiscount;
  document.getElementById("price").innerHTML = finalPrice.toFixed(2) + "€";
  document.getElementById("carriage").innerHTML = numberCarriage;
  document.getElementById("cp-code").innerHTML = "17458";
}

const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", function() {
  document.querySelector("#name-input").value = "";
  document.querySelector("#km-input").value = "";
  document.querySelector("#age-input").value = "";
  document.getElementById("type-discount").innerHTML = "-"
  document.getElementById("price").innerHTML = "-";
  document.getElementById("carriage").innerHTML = "-";
  document.getElementById("cp-code").innerHTML = "-";
  document.getElementById('output-name').innerHTML = "-";
});












