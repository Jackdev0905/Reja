console.log("Maslahatlar");

const list = [
    "yaxshi talaba bo'ling", //0-20
    "Qattiq mehnat qiling", //20-60
    "endi dam oling" //60
];

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

function countDigits(word){
    let num = 0;
    word.split("").map((ele) =>{
        if(ele >= '0' && ele <= '9') num++;
    })
    return num;
}
console.log(countDigits("79shj3hjb4b"));
