let value;

const numbers = [43, 54, 99, 123, 22]

// const number2 = new Array(1,2,3,4,5,6,7,8)

const langs = ("Pyhton", "Java", "C++", "JavaScript")

const a = ["Merhaba", 22, null, undefined, 3.14]
// Uzunluk
value = numbers.length
// Indexleme
value = numbers[0] //43
value = numbers[2] //99
value = numbers[numbers.length - 1] //22

// Herhangi bir indexteki değeri değiştirme
numbers[2] = 1000
value = numbers

// Indexof
value = numbers.indexOf(1000) //2 

// Arrayin sonuna değer ekleme - Push

numbers.push(2000)
value = numbers

// Arrayin başına değer ekleme - Unshift

numbers.unshift(9000)
value = numbers

// Sonunda Değer silme - Pop

numbers.pop()
value = numbers

// Başından değer silme - Shift
numbers.shift()
value = numbers





console.log(value);