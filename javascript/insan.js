
//soyutlama ile gerçek hayattakı bir nesneyi javascript ortamında tanımladım 
class Insan 
{  // başlangıc scope 
   //string tipinde isim diye bir değişken tanımladık 
  adi = "ibrahim123";
  soyadi = "gökyar";
  //integer tipinde tam sayısal verileri saklamak tutmak kullanır 
  //değişkenler datatype 
  yas = 48;
  //boolean true yada false şeklinde veri tutar 
  cinsiyet = false;
  //double kesirli sayılıra tutmak için kullanılır 
  maas = 3.14;

//fonksiyonun başlangıç scope u
//dışarıdan parametre alacak hale getirdim. 
uyu(isim,soyisim)
{
   
  console.log(isim +" "+soyisim+" uyuyor");
}
//fonksiyonun bitiş scope 

yasHesapla(dogumYili)
{
  var bulundugumuzYil = new Date().getFullYear();  
  var sonuc = bulundugumuzYil - dogumYili;
  return sonuc;
}

} // bitiş scope

//var nesneadi = new ClassAdi();
//bir classtan nesne oluşturma
var i = new Insan();
i.adi = "Hakan";
i.soyadi="Yılmaz";
i.yas = 33;
i.maas = 3.49;
i.cinsiyet = true;
//fonksiyonu çağırmak 
i.uyu("ibrahim","gökyar");
var gelenYas = i.yasHesapla(1978);
console.log("Yaşınız : " + gelenYas);