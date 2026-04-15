let price = 100;
let balance = 10000;

setInterval(() => {
  price += (Math.random() - 0.5) * 2;
  document.getElementById("price").innerText = price.toFixed(2);
}, 1500);

function trade(type) {
  let profit = (Math.random() * 20 - 10).toFixed(2);

  balance += parseFloat(profit);

  document.getElementById("balance").innerText =
    "Balance: $" + balance.toFixed(2);

  let li = document.createElement("li");
  li.innerText = `${type.toUpperCase()} → $${profit}`;
  document.getElementById("trades").appendChild(li);
}
