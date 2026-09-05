

class Matematik{

    //topla adından bir fonksiyon tanımladik fonksiyona dışarıdan 2 tane parametre göntderdik
    //bu 2 paramterin fonksiyon toplanıp hesaplanan sonucun dönmesini sağladık
    //return ifadesi bu fonksiyonu kim nerde çağıırsa ona ilgili sonucu döner
topla(sayi1,sayi2)
{
 
var sonuc = 0;
sonuc = sayi1+sayi2;
return sonuc;
}

cikar(sayi1,sayi2)
{
    return sayi1-sayi2;
}

}

var m = new Matematik();
var gelenDeger = m.topla(15,15);
console.log("Toplam : " + gelenDeger);

console.log("Kalan Sonuç : "+m.cikar(10,10));
var yil = new Date().getFullYear();
console.log("Bulunduğumuz Yıl : " + yil);