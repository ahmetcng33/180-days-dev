//! While Döngüleri - Koşul doğru olduğu sürece sonsuza kadar devam eder

// let i = 0;

// while(i < 10){
//     console.log(i);

//     i+=1 // i++
// }

//*! Break ve Continue

// let i = 0

// while(i < 10){
//     console.log(i);
//     if(i == 5) {
//         break;
//     }
//     i++;
// }

// let i = 0

// while ( i < 10){

//     if(i == 3 || i == 5){
//         i++
//         continue;
//     }
//     console.log(i);
//     i++;
// }


//*! Do While - Döngü bi kez çalışır sonra kontrol ederek çalışır

// let i = 0;

// do{
//     console.log(i);
//     i++
// }while(i < 10);


//*! For

// const lang = ["Python", "JavaScript", "Java"]

// let i = 0

// while(i < lang.length){
//     console.log(lang[i]);
//     i++
// }

// for(let i=0; i < lang.length; i++){
//     console.log(lang[i]);
// }


//*! For each
// lang.forEach(function (x,index){
//     console.log(x,index);
// });


//*! Map Funciton

// const user = [
//     {name:"Ahmet", age:25},
//     {name:"Zenep", age:40},
//     {name:"Ali", age:35}
// ];

// const names = user.map(function(user){
//     return user.name;
// })
// const ages = user.map(function(user){
//     return user.age;
// })

// console.log(names);
// console.log(ages);


const user = {
    name:"Ahmet",
    age:"22"
}
for(let key in user){
    console.log(key,user[key]);
}