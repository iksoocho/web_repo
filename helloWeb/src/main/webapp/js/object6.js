//object6.js

const map = new Map();
map.set("홍길동",80);
map.set("이몽룡", 85);
map.set("이몽룡", 89); //키 값이 같으면 덮어쓰기
//map.delete("이몽룡");

const refval = [12];
map.set(refval,88);
console.log(map.get(refval));

console.log(map.get("홍길동"));
for(let ent of map.entries()){   //entries() > 키 : 값 반환
    console.log(ent);
    console.log('이름은 ',ent[0],'입니다.');
    console.log('점수는 ',ent[1],'점 입니다.');
}

map.forEach(function(val,key,map){
    if(key=='홍길동'){
        console.log(val,key,map);
    }
})

//map <-> array
const ary = [['프로도',3],['라이언',5],['어피치',4]];
const fmap = new Map(ary);   //Map(배열);

for(let ent of fmap.entries()){
    console.log('key : '+ent[0]+'  값 : '+ent[1]);
}

const entries = fmap.entries();
console.log(entries);   //entries : MapIterator 타입

console.log(Array.from(fmap)); //map -> Array

//Set : 중된값 허용 x(배열은 X)
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add("어피치");
set1.add(["어피치", 4]);
set1.add(["어피치", 4]);
console.log(set1.size);

set1.forEach(function(val,item,set){ 
    console.log(val,item,set);
})

//Set <-> Array
const setAry =['라이언','프로도','어피치','어피치']
const set2 = new Set(setAry);
console.log(set2.size);

console.log(Array.from(set2)); //set -> Array
