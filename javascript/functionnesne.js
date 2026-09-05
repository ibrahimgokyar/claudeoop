var Person = function() {
    this.isim;
    this.soyisim;
    this.adSoyad= function()
    {
        return this.isim +" " +this.soyisim;
    }
}


var p = new Person();
p.isim = "Metin";
p.soyisim= "Yıldız";
var gelenAdSoyad = p.adSoyad();
console.log(gelenAdSoyad);