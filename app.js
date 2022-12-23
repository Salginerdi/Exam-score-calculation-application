// Sınav Puanı Hesaplama Uygulaması (Switch & Case ile)

/*
    1-Türkçe 40 Soru 
    2-Matematik 40 Soru
    3-Sosyal Bilimler 20 Soru
    4-Fen Bilimleri 20 Soru

        Koşullarımız:
    Sınav Merkezi 100 puan veriyor.
    Okul 60 puan veriyor.

    Her soruyu 4 puan üzerinden değerlendiriyoruz.

*/

let turkceDogru,
  turkceYanlis = 0;
let matematikDogru,
  matematikYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let fenDogru,
  fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj =
  "Puan hesaplama uygulamasına hoş geldiniz!" +
  yeniSatir +
  "1-Puan Hesapla : " +
  yeniSatir +
  "2-Çıkış Yap";

let secim = prompt(mesaj);

switch (secim) {
  case "1":
    okulPuani = Number(prompt("Okul Puanınızı Giriniz : "));

    turkceDogru = Number(prompt("Türkçe Dersindeki Doğru Sayınızı Giriniz : "));
    turkceYanlis = Number(
      prompt("Türkçe Dersindeki Yanlış Sayınızı Giriniz : ")
    );

    matematikDogru = Number(
      prompt("Matematik Dersindeki Doğru Sayınızı Giriniz : ")
    );
    matematikYanlis = Number(
      prompt("Matematik Dersindeki Yanlış Sayınızı Giriniz : ")
    );

    sosyalDogru = Number(
      prompt("Sosyal Bilgiler Dersindeki Doğru Sayınızı Giriniz : ")
    );
    sosyalYanlis = Number(
      prompt("Sosyal Bilgiler Dersindeki Yanlış Sayınızı Giriniz : ")
    );

    fenDogru = Number(
      prompt("Fen Bilimleri Dersindeki Doğru Sayınızı Giriniz : ")
    );
    fenYanlis = Number(
      prompt("Fen Bilimleri Dersindeki Yanlış Sayınızı Giriniz : ")
    );

    let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
    let yanlisSayisi =
      turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
    let kalanNet = dogruSayisi - yanlisSayisi / 4;
    let puan = kalanNet * 4 + 100 + okulPuani;

    alert("Puanınız : " + puan);
    break;

  case "2":
    alert("Çıkış Yapılmıştır.");
    break;

  default:
    alert("Lütfen Geçerli Aralıkta Değer Giriniz!");
    break;
}
