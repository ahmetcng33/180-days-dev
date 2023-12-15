let value;

const now = new Date()  //Şu anki zamanı almamızı sağlar...

const date1 = new Date("2001-8-26 12:00:00");
const date2 = new Date("August 26 2001")
const date3 = new Date("2001/8/26")

value = date1

value = date1.getMonth()
value = date1.getDate()
value = date1.getDay() //pazardan başlar 6 da biter indexe göre 

value = date1.getHours()
value = date1.getMinutes()
value = date1.getSeconds()
value = date1.getMilliseconds()

// Tarih değerleri değişebiliyor  aylar sıfırdan başlar!
date1.setMonth(8)
date1.setDate(16)
date1.setFullYear(200)

value = date1










console.log(value);