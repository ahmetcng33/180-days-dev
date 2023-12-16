//*!Karsilastirma Operatörleri

// ==    değerleri eşit mi
// ===   hem değer hem tipleri eşit mi
//*  !=   eşit değil mi 
//*  !===  hem değerleri hem tipleri eşit değil mi
// <     küçüktür
// >    büyüktür
// >=   büyük eşit
// <=   küçük eşit

// console.log(2==2); //true
// console.log("js"==="java"); //false türleri eşit ama değeri aynı değil

// console.log(2 == "2"); //true değerleri eşit
// console.log(2 === "2"); //false değeleri eşit ama türleri farklı

// console.log(4>2); //true 4 2 den büyük 
// console.log(4<2); //true 4 2 den küçük 

// console.log(2>=2); //true 2 2 den büyük eşit  


//*! Mantıksal Bağlaç

// Not operatör

// console.log(2!=2); //false çünkü ünlem not anlamına gelir

// And operatör - hepsi true ise true biri bile false ise false

// console.log(2==2) && ("ahmet" == "ahmet"); //ikiside true olduğu için true çıkar

// Or operatörü - Biri bile true ise true hepsi false ise false

// console.log(4==2) || ("Ahmet"!= "Ahmet"); //false çünkü ikiside false

//*! If Koşulları

// const error = false
// if(error == true){
//     console.log("Hata Oluştu");
// }else{
//     console.log("Hata yok devam koçum");
// }
// console.log("deneme");

// const user = "ac"

// if(user === "ac"){
//     console.log("Amedi Buldun afferim");
// }else if(user === "amed"){
//     console.log("farklı bi amedi buldunuz");
// }
// else{
//     console.log("Böyle bir kullanici bulunamadi");
// }

// const number = 100
// if(number === 100){
//     console.log("sayi 100e eşit");
// }
// else{
//     console.log("sayi 100e eşit diil");
// }

//*! Ternary Operatörs 

// console.log(number===100 ? "Sayi100" : "Sayi 100 Diil");


//*! Switch-Case

// const process = 2
// switch(process){
//     case 1:
//         console.log("Işlem 1")
//         break //swithc-case den çık demek 
//     case 2:
//         console.log("Işlem 2")
//         break
//     case 3:
//         console.log("Işlem 3")
//         break
//     case 4:
//         console.log("işlem 4");
//         break
//     default:
//         console.log("Yavaş la gaç tane alıyon");
// }