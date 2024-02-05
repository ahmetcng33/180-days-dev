// Window Object

// console.log(window);
// console.log(this.document);  //index.htmli görürüz
// console.log(document);  //İndex.htmli görürüz üsttekiyle aynı ağacın kökü documenttır


// let value;
// value = document;
// value = document.length; //Element sayısını verir
// value = document.all[0];
// value = document.all[6];
// value = document.all[document.all.length-1];   //sonuncu elemanı verir

// console.log(value);


// const elements = document.all;
// console.log(elements); 
// for(let i = 0; i < elements.length; i++)
//     console.log(elements[i]);

// elements.forEach(function(element) => {
//     console.log(element);    
// });

// const collections = Array.from(document.all);

// collections.forEach(function(collection){
//     console.log(collection);
// })


// value = document.all
// value = document.body;
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = document.location.port;

// value = document.URL;

// value = document.characterSet;
// console.log(value);



// let value;

// value = document;

// Scriptler

// value = document.scripts;

// value = document.scripts.length;
// value = document.scripts[0];

// Linkler

// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length-1]; //Son Link
// value = document.links[document.links.length-1].getAttribute("class"); //class özelliklerini yazdır
// value = document.links[document.links.length-1].className; //class özeliklerini yazdır
// value = document.links[document.links.length-1].classList; //class özeliklerini yazdır


// Formlar 

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"]
// value = document.forms[0].id;  //id özelliğini öğrenme
// value = document.forms[0].name;  //name özelliğini öğrenme

// value = document.forms[0].method; //Methodunu öğrenme

// console.log(value);

// Element Id'e göre seçme 

// let element;

// element = document.getElementById("todo-form")
// element = document.getElementById("tasks-title")


// Element Classa göre seçme 

// element = document.getElementsByClassName("list-group-item")[0]
// element = document.getElementsByClassName("card-header")

// Element Tag'e göre seçme

// element = document.getElementsByTagName("div")

// Query Selector - Css Selector -  Tek bir Element - Ilk elementi verir

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");

// element = document.querySelector(".list-group-item")

// element = document.querySelector("li")
// element = document.querySelector("div")

// Birden çok elementi almak için
// element = document.querySelectorAll("li")  //Node List

// element.forEach(function(el) { 
//     console.log(el);
    
// });

// console.log(element);

// const element = document.querySelector("#clear-todos")

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);  //elementin içindeki yazıları verir
// console.log(element.innerHTML); //içindeki html elementleri dahil her şeyi alır
// console.log(element.href);
// console.log(element.style);

//! Style ve Elemenet Özelliklerini Değiştirme

// element.className = "btn btn-primary"
// element.style.color = "red"
// element.style.marginLeft = "30px"
// element.href = "https://www.google.com.tr"
// element.target = "href"
// console.log(element);

// element.textContent = "Silin"
// element.textContent = "<span>Silin</span>"
// element.innerHTML = "<span style = 'color:green'> Silin </span>"

let element2 = document.querySelector("li:last-child")

elemenet2 = document.querySelector("li:nth-child(2)")
elemenet2 = document.querySelector("li:nth-child(3)")
elemenet2 = document.querySelector("li:nth-child(4)")
element2 = document.querySelectorAll("li:nth-child(odd)")
element2 = document.querySelectorAll("li:nth-child(even)")

element2.forEach(el => {
    el.style.background = "#ccc"
    el.style.color = "red"
    
});
// const elements = document.querySelectorAll(".list-group-item") //Node list
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee"
// })

console.log(element2);
// console.log(elements);