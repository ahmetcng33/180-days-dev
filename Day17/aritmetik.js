let value ;

const value1 = 10;
const value2 = 4;

// Aritmetik Operatörler

// value = value1 + value2
// value = value1 - value2
// value = value1 * value2
// value = value1 / value2
// value = value1 % value2




value = Math.PI;
value = Math.E;

value = Math.round(3.6)  // Virgülden sonrasına göre yuvarlama yapar  => 4
value = Math.round(3.4)  //3

value = Math.ceil(3.1)  // Her zaman bir üst tam sayıya yuvarlar =>4

value = Math.floor(3.7) // Her zaman bir alt tam sayıya yuvarlar => 3

value = Math.sqrt(16) //Karekök alma

value = Math.abs(-10) // Mutlak deger alır

value = Math.pow(8,3)  //8 ^ 3 ü bulur yani kuvvetini bulur
value = Math.pow(2,5) // 2 ^ 5 =>32 
 
value = Math.max(10,-1,100,32) // Bu değerler arasında en buyugu döndürür
value = Math.min(10,-1,100,32) // Bu değerler arasında en kucugu döndürür

value = Math.random()   // 0-1 arasında rastgele değerler döndürür 

value = Math.floor(Math.random()* 50 + 1 )



console.log(value);