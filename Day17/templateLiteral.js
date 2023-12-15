const name = "Ahmet Cingi"
const department = "Software"
const salary = 4000

// const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary

const a =  ` isim: ${name}\n Department: ${department}\n Salary: ${salary}` //üsttekinin aynısı backtick arasında değer kullanma


// //*! İlerde İşine yarar
// const html = "<ul>" +
//                 "<li>" + name + "</li>"+
//                 "<li>" + department + "</li>"+
//                 "<li>" + salary + "</li>"+
//             "</ul>"
// document.body.innerHTML = html


function b(){
    return "Merhaba";
}
const html = `
        <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10/4}</li>
            <li>${b()}</li>
        </ul>

`
document.body.innerHTML = html 


console.log(a);
