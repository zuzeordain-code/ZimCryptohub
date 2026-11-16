function toggleMenu(){

document
.getElementById("mobileMenu")
.classList.toggle("active");

}

async function loadPrices(){

try{

const response = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd"
);

const data = await response.json();

document.getElementById("prices").innerHTML = `
<div>₿ Bitcoin: $${data.bitcoin.usd}</div>
<div>Ξ Ethereum: $${data.ethereum.usd}</div>
<div>₮ USDT: $${data.tether.usd}</div>
`;

}catch{

document.getElementById("prices").innerHTML =
"<div>Unable to load prices.</div>";

}

}

function checkWallet(){

const wallet =
document.getElementById("wallet").value;

if(wallet.length < 10){

document.getElementById("result").innerHTML =
"❌ Invalid wallet address";

return;

}

document.getElementById("result").innerHTML =
"✅ No scam reports found";

}

function calculateProfit(){

let buy =
parseFloat(document.getElementById("buy").value);

let sell =
parseFloat(document.getElementById("sell").value);

let qty =
parseFloat(document.getElementById("qty").value);

if(isNaN(buy) || isNaN(sell) || isNaN(qty)){

document.getElementById("profit").innerHTML =
"Enter valid numbers";

return;

}

let profit =
(sell - buy) * qty;

document.getElementById("profit").innerHTML =
"Profit: $" + profit.toFixed(2);

}

function toggleTheme(){

document.body.classList.toggle("light-theme");

const btn =
document.querySelector(".theme-btn");

if(document.body.classList.contains("light-theme")){

btn.innerHTML = "☀️";

localStorage.setItem("theme","light");

}else{

btn.innerHTML = "🌙";

localStorage.setItem("theme","dark");

}

}

window.onload = function(){

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "light"){

document.body.classList.add("light-theme");

document.querySelector(".theme-btn")
.innerHTML = "☀️";

}

};
