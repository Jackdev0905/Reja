// F-TASK
const findDoublers = (str)=>{
    const sortedArr = str.split("").sort();
    return sortedArr.some((e, i) => e === sortedArr[i + 1]);
}
console.log(findDoublers("albatta"));

 

// E-TASK
// function getReverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(getReverse("hello"));
 




// D-TASK
// const moment = require("moment")
// class Shop{

//     constructor(non, lagmon, cola){
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     qoldiq(){
//         console.log("Hozir ", moment().format("HH:mm"), "da");
//         console.log(`${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
        
//     }
//     sotish(product, miqdor){
//         if(product == 'non') this.non -= miqdor;
//         else if(product == 'lagmon') this.lagmon -= miqdor;
//         else if(product == 'cola') this.cola -= miqdor;
//         else console.log(product, "mavjud emas!");

//     }
//     qabul(product, miqdor){
//         if(product == 'non') this.non += miqdor;
//         else if(product == 'lagmon') this.lagmon += miqdor;
//         else if(product == 'cola') this.cola += miqdor;
//         else console.log("Bunday mahsulot mavjud emas!");
//     }
// }
// const shop = new Shop(4,5,2);
// shop.qoldiq();

// shop.sotish('kabob', 3);
// shop.qabul('non', 4);
// shop.qoldiq();


// C-TASK
// function checkContent(a, b){
//     const arr1 = a.split("").sort()
//     const arr2 = b.split("").sort()
//     console.log(arr1, arr2);

//     arr1.map((ele, i)=>{
//         if(ele === arr1[i+1]) arr1.splice(i,1);
//     })
//     console.log("==========");

//     arr2.map((ele, i)=>{
//         if(ele === arr2[i+1]) arr2.splice(i,1);
//     })
//     console.log(arr1, arr2);
//     if(arr1.length === arr2.length) {
//         for(let i=0; i<arr2.length; i++){
//             if(arr1[i] !== arr2[i]) return false;
//         }
//         return true;
//     }
//     else return false;
// }
// console.log(checkContent("mitgroup", "pgourtimm"));


// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "Qattiq mehnat qiling", //20-60
//     "endi dam oling" //60
// ];

// callback
/*
function maslahatBering(a, callback){
    if(typeof a !== 'number') callback("Iltimos, raqam kiriting", null)
    else if( a <= 20) callback(null, list[0]);
    else if( a > 20 && a<=60) setTimeout(()=>{
        callback(null, list[1])
    },5000);
    else callback(null, list[2]);
}


console.log("passed 0");

maslahatBering(40, (err, data) =>{
    if(err) console.log("ERROR:",err);
    else console.log(data);
    
})
console.log("passed 1");

*/


// async function

/*
async function maslahatBering(a){
    if(typeof a !== 'number') throw new Error("Iltimos, raqam kiriting")
    else if( a <= 20) return list[0];
    else if( a > 20 && a<=60) return list[1];
    else return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(list[2]);
        },5000)
    })
}


console.log("passed 0");

// maslahatBering(70).then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log("Error: ", err);
    
// })

async function run(){
    let javob = await maslahatBering(30);
    console.log(javob);
    javob = await maslahatBering(70);
    console.log(javob);
    
}
run()

console.log("passed 1");
*/

// MITASK

/* A task
function count(word, letter){
    // first option

    let num = 0;
    // for(let i=0; i < word.length; i++){
    //     if(word[i] === letter) num++;
    // };


    // second
    word.split("").map((ele) =>{
        if(ele === letter) num++;
    })
    return num;

}

console.log((count("elvetor", "e")));

*/


// B TASK

// function countDigits(word){
//     let num = 0;
//     word.split("").map((ele) =>{
//         if(ele >= '0' && ele <= '9') num++;
//     })
//     return num;
// }
// console.log(countDigits("79shj3hjb4b"));




// function checkContent(a, b) {
//     const arr1 = a.split("").sort();
//     const arr2 = b.split("").sort();
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         return true;
//       }
//       return false;
//     }
//   }
  
  
