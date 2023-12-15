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
 


console.log(value);