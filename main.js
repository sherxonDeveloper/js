var money = prompt("Mablag'ingizni kiriting!")

var dollar = 9433.34;
var euro = 10354.03;

var toDollar = Number(money) / dollar;
var toEuro = Number(money) / euro;

if (toDollar >= 500) {
  if (toDollar - 500 >= 250){
    var convert = ((toDollar - 750) * dollar) / euro
    if(convert >= 120){
      alert("Alisher sayohatga yaxshi borib keling.")
    }else{
      alert("Alisher sayohatga yaxshi borib keling likn Muzey bilan aylanishga yetmedi.")
    }
  }else{
    alert("Alisher pulingiz biletga yetdi lekin mehmonhonaga yetmaydi.")
  }
} else {
  alert("Alisher pulingiz borib ketishga yetmaydi.")
}