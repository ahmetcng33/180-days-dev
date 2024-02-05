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

let element;

element = document.getElementById("todo-form")
element = document.getElementById("tasks-title")


// Element Classa göre seçme 

element = document.getElementsByClassName("list-group-item")[0]
element = document.getElementsByClassName("card-header")

// Element Tag'e göre seçme

element = document.getElementsByTagName("div")

// Query Selector - Css Selector -  Tek bir Element - Ilk elementi verir

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item")

element = document.querySelector("li")
element = document.querySelector("div")

// Birden çok elementi almak için
element = document.querySelectorAll("li")  //Node List

element.forEach(function(el) { 
    console.log(el);
    
});



console.log(element);