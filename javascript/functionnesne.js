var Person = function() {
    isim;
    soyisim;
    this.adSoyad= function()
    {
        return isim +" " +soyisim;
    }
}


var p = new Person();
p.isim = "Metin";
p.soyisim= "Yıldız";
var gelenAdSoyad = p.adSoyad();
console.log(gelenAdSoyad);