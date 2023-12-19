// Fonksiyon Tanimlama

// function merhaba(name = "Bilgi Yok",age= "Bilgi yok"){
//     console.log(`Isim : ${name} Yas: ${age}`);
// }

// merhaba("Ahmet",30);  //Function call - Fonksiyon çağrısı

// merhaba();

// merhaba("Kadir")


// function square(x){
//     return x*x;
// }

// function cube(x){
//     return x*x*x;
//     // return den sonrası çalışmaz bro boşa deneme
//     // console.log("naber ");
// }

// let a = cube(square(12));

// console.log(a);


// function merhaba(){
//     return "Merhaba"
// }

// console.log(merhaba());

//*! Function Expression

// const merhaba = function(name){
//     console.log("merhaba " + name);
// }

// merhaba("Amed")

//*! Immediately Invoked Function Expression (IIFE) - Tanımlandığı yerde çalışan fonksiyon

// (function(name){
//     console.log("Merhaba " + name);
// })("Amed")

const database = {
    host : "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} silindi`);
    }
}

console.log(database.host);
database.add()
database.update(10)
console.log(database.update);