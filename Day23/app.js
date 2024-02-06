// let value;

// const todoList = document.querySelector(".list-group")
// const todo = document.querySelector(".list-group-item:nth-child(2)")
// const cardrow = document.querySelector(".card.row")

// value = todoList;
// value = todo
// value = cardrow

// Child Nodes

// value = todoList.childNodes  //attığın entera kadar yazar 
// value = todoList.childNodes[0]

// Children - Element

// value = todoList.children  //atılan enter vs yazmaz elementleri verir
// value = todoList.children[todoList.children.length-1]
// value = todoList.children[2].textContent = "Değiştirdim"



// value = cardrow
// value = cardrow.children
// value = cardrow.children[2].children[1].textContent = "Todolar buraya gardaaaaş"


// value = todoList
// value = todoList.firstElementChild
// value = todoList.lastElementChild
// value = todoList.children.length
// value = todoList.childElementCount

// value = cardrow
// value = cardrow.parentElement
// value = cardrow.parentElement.parentElement

// Element Kardeşleri

// value = todo
// value = todo.previousElementSibling // Bir önceki kardeşe git



// console.log(value);


//! Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taslakları Temizleyin<a/>

const newLink = document.createElement("a")
const cardbody = document.getElementsByClassName("card-body")[1]

newLink.id = "clear-todos"
newLink.className = "btn btn-danger"
newLink.href = "https://www.google.com.tr"
newLink.target = "_blank"

newLink.appendChild(document.createTextNode("Farkli Sayfaya git"))
console.log(newLink);

cardbody.appendChild(newLink)

//*****************************************/
// Text Content
// newLink.textContent = "Yeni oluşan a" // Güvenli Değil
// cardbody.textContent = "asdasdasd"  // Her şeyi silip sadece bunu yazar iyi değil

//! Text Node   Elemente element eklerken bunu kullan

// const text = document.createTextNode("Naber")
// cardbody.appendChild(text)
//*****************************/




console.log(cardbody);
console.log(newLink);