//array3.js

let pos = "Hollo, World".indexOf(',');
console.log(pos);

let names = ["콘", "무지", "라이언","어피치"]
pos = names.indexOf("무지");
if(pos == -1){
    console.log('없는 이름 입니다.')
}else{
    console.log("무지는 "+(pos+1)+"번째 위치에 있습니다.");
}

//{name:"", age: 20}
let members = [
    {name:"김민식", age:22},
    {name:"박정우", age:32},
    {name:"최민식", age:26},
    {name:"이수현", age:42}
]
let search = "민식"
let count = 0;

// for(let mem of members){
//     if(mem.name.indexOf("민식") != -1){
//         count++;
//     }
// }

//교수님 버전
members.forEach(member =>{
    if(member.name.indexOf("민식")!=-1){
        count++;
    }
})
console.log("이름이 ",search," 인 사람의 수는 ",count,"명 입니다.")