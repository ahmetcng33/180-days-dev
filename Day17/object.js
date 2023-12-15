let value ;

const programmer = {
    name : "Ahmet Cingi" ,
    age : 25,
    email : "ahmetcingi@gmail.com",
    langs : ["Python", "Java", "JavaScript"],
    
    adress : {
        city : "Kayseri",
        street : "Talas"
    },
    
    work : function(){
        console.log("Yazilimci Calisiyor ...");
    }
}

value = programmer 

value = programmer.email  //Genel kullanılan
value = programmer["email"]

value = programmer.langs
// Adress in içindeki city i bulma
value = programmer.adress.city

programmer.work()

// Json objeleri

const programmers = [
    {name:"Ahmet cingi",age:25},
    {name : "memet", age:30}
]

value = programmers[0].name


console.log(value);