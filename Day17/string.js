let value ;

const firstName = "Messi"
const lastName = "Penaldo"

const langs = "Java, Python, C++"

value = firstName + " " + lastName + " "+ langs

value = "Amed Cingi"

// value = value + " Cingi"
value += " cingi"  //üsttekiyle aynı

value = firstName.length  //uzunluk(karakter sayısı) ölçer

value = firstName.concat (" ", lastName," ", " caz") //ekleme anlamına gelir

value = firstName.toLowerCase()  // Bütün karakterler küçülür
value = firstName.toUpperCase() // Bütün karakterler Büyür

value = firstName[0] // 0. indexteki eleman => M 
value = firstName[2] //2. indexteki eleman =>s
value = firstName[firstName.length-1] //her zaman son elemanı buluruz 
 
// İndex of

value = firstName.indexOf("s") //index numarasını verir => 2
value = firstName.indexOf("m") // içinde yoksa -1 gelir

// Char at

value = firstName.charAt(0) //o indexte hangi karakter varsa onu verir
value = firstName.charAt(firstName.length - 1) //son indexteki elemanı verir

// Split

value = langs.split(",")  //virgüle göre parçalar her bir liste elamanına ekler => ['Java', ' Python', ' C++']

// Replace

value = langs.replace("Pyhton", "CSS") //Pyhton yerine CSS ekle

// Includes

value = langs.includes("Java")  //içinde bu elaman varsa true döner yoksa false döner 
value = langs.includes("asdasdsad")  //içinde bu elaman varsa true döner yoksa false döner 

console.log(value);