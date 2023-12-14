// console.log("Merhaba JS")
// console.log(21313214);
// console.log(true);
// console.log(false);

// console.warn("Bu Bir uyaridir")
// console.error("Bu Sayfa Bulunamadi")
// console.clear()

//*! Değişkenler 

// Var
// var name = "Ahmet Cingi";
// console.log(name);

// name = "amed"
// console.log(name);
// var => Global ve değişebilen veri
// let => Local ve değişmez veri
// const = Global ve içeriği değiştirilebilen veri .push vs
//*! Mülakatta gelir a ya tekrar değer ataması yapılmaz sadece değeri güncellenir
// const a = [1,2,3,4,5]
// console.log(a);
// a = [1,2,3,4,5]
// console.log(a);

let value;

// Veri Tiplerini String'e Cevirme

value = 123;
value = String(123)
value = (123).toString()
value = String(3.14)
value = (3.14).toString()
value = String(true)
value = String(false)
value = String(function() {console.log()})
value = String([1,2,3,4,5])


console.log(value);
console.log(typeof value);

// Veritiplerini Sayilara Cevirme

value = Number("123")
value = Number(null)
value = Number(undefined)  //Nan olur ne sıfır ne bi sayı
value = Number("Hi everyone") //Nan 
value = Number(function() {console.log()})
value = Number([1,2,3,4,5])




console.log(value);
console.log(typeof(value));

