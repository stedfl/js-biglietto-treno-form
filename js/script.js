const btnInput = document.getElementById("btn-input");
btnInput.addEventListener("click", ticketParameters);

function ticketParameters() {
  const name = document.getElementById('name-input').value;
  let userAge = document.getElementById("framework").value;
  const userKm = document.getElementById('km-input').value;
  const priceForKm = 0.21;
  const totalPrice = userKm * priceForKm;
  const numberCarriage = Math.floor((Math.random() * 10) + 1);
  const bookingCode = Math.floor(Math.random() * (Math.floor(1670) - Math.ceil(1520)) + Math.ceil(1520));
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

  if (isNaN(userKm) ) {
    alert('Inserire il numero di chilometri');
  } else if (name.match("[0-9]+")) {
    alert('Nome e cognome non validi');
  } else if (name =="" || userKm =="") {
    alert('Compilare tutti i campi')
  } else {
    
    document.getElementById('output-name').innerHTML = name.toUpperCase();
    document.getElementById("type-discount").innerHTML = visualDiscount;
    document.getElementById("carriage").innerHTML = numberCarriage;
    document.getElementById("cp-code").innerHTML = bookingCode;
    document.getElementById("price").innerHTML = finalPrice.toFixed(2) + "€";
  }
}



const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", function() {
  document.getElementById("name-input").value = "";
  document.getElementById("km-input").value = "";
  document.getElementById("framework").value = "standard";
  document.getElementById('output-name').innerHTML = "-";
  document.getElementById("type-discount").innerHTML = "-"
  document.getElementById("carriage").innerHTML = "-";
  document.getElementById("cp-code").innerHTML = "-";
  document.getElementById("price").innerHTML = "-";
});