let money = prompt("Mablag'ingizni kiriting!");

let dollar = 11000.34;
let euro = 12354.03;

let toDollar = Number(money) / dollar;
let toEuro = Number(money) / euro;

if (toDollar >= 500) {
  if (toDollar - 500 >= 250) {
    let convert = ((toDollar - 750) * dollar) / euro;
    if (convert >= 120) {
      alert("Alisher sayohatga yaxshi borib keling.");
    } else {
      alert(
        "Alisher sayohatga yaxshi borib keling likn Muzey bilan aylanishga yetmedi."
      );
    }
  } else {
    alert("Alisher pulingiz biletga yetdi lekin mehmonhonaga yetmaydi.");
  }
} else {
  alert("Alisher pulingiz borib kelishga yetmaydi.");
}
