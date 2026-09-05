

class Araba
{

    //properties değişkenler 
marka = "bmw";
model = "x5";
kapiSayisi = 4;
pencereSayisi = 4;

//olaylar 
git(markasi,modeli)
{
  console.log(markasi+" "+modeli+ " gidiyor...");
}

sirasVer(markasi,modeli,kapiadet,pencereadet,fiyat)
{
  console.log("Sipariş verilen arabanın markası : " +markasi
              + " modeli : " +modeli+ " kap sayısı : " + kapiadet
              +  " Pencere sayısı : " + pencereadet+ " fiyatı : " +fiyat);
}

arabaYasHesapla(uretimYili)
{
    var bulundugumuzYil = new Date().getFullYear();
    var sonuc = bulundugumuzYil - uretimYili;
    return sonuc;
}


}

var a = new Araba();
a.marka = "mercedes";
a.model = "xl";
a.kapiSayisi = 4;
a.pencereSayisi = 4;
a.git("Porche","Carrera")
//console.log("Sipariş verilen arabanın markası " +
    //a.marka + " modeli : "+a.model + " kapı sayısı : " + a.kapiSayisi + " pencere sayısı : " +a.pencereSayisi);
a.sirasVer("Porche","carrera",4,4,2000000.0);
var hesaplanmisYas = a.arabaYasHesapla(2015);
console.log("Arabanın Yaşı : " + hesaplanmisYas);

console.log("Arabanın Yaşı 2 : " + a.arabaYasHesapla(2020));
