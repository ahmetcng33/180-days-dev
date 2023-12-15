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


console.log(value);