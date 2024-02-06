const todoInput = document.getElementById("todo")
let element


element = todoInput
element = todoInput.classList
element = todoInput.getAttribute("placeholder")
todoInput.setAttribute("placeholder", "Naber")
todoInput.setAttribute("title","input")
todoInput.removeAttribute("name")


element = todoInput
// element = todoInput.hasAttribute("name")  //Bu attribute var mı



todoInput.classList.add("newClass")
todoInput.classList.add("newClass2")
todoInput.classList.remove("form-control")
// todoInput.className = "form-control newClass"

console.log(element);