//*!Karsilastirma Operatörleri

// ==    değerleri eşit mi
// ===   hem değer hem tipleri eşit mi
//*  !=   eşit değil mi 
//*  !===  hem değerleri hem tipleri eşit değil mi
// <     küçüktür
// >    büyüktür
// >=   büyük eşit
// <=   küçük eşit

console.log(2==2); //true
console.log("js"==="java"); //false türleri eşit ama değeri aynı değil

console.log(2 == "2"); //true değerleri eşit
console.log(2 === "2"); //false değeleri eşit ama türleri farklı

console.log(4>2); //true 4 2 den büyük 
console.log(4<2); //true 4 2 den küçük 

console.log(2>=2); //true 2 2 den büyük eşit  


//*! Mantıksal Bağlaç

// Not operatör

console.log(2!=2); //false çünkü ünlem not anlamına gelir

// And operatör - hepsi true ise true biri bile false ise false

console.log(2==2) && ("ahmet" == "ahmet"); //ikiside true olduğu için true çıkar

// Or operatörü - Biri bile true ise true hepsi false ise false

console.log(4==2) || ("Ahmet"!= "Ahmet"); //false çünkü ikiside false