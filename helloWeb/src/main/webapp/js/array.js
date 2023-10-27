//array.js

const arr1 = [];
arr1.push(10);
arr1.push('ten');
arr1.push({name: 'Hong', age: 20});

arr1.unshift(20);   //배열의 제일 앞쪽에 추가

console.log('배열의 크기 : ',arr1.length);

//arr1.length = 10; //배열의 크기를 조절 가능 > 줄인만큼 뒤에서부터 제외됨, 늘리면 나머지 값은 undefined

arr1.pop(); //뒤에서 부터 하나씩 제거
arr1.shift(); // 앞에서 부터 하나씩 제거

arr1.splice(1, 0, 30); //추가 , 삭제, 수정 가능    .splice(시작위치, 제거할 요소의 갯수, 추가할 요소)   ( ,0 , )>추가/( ,1 ,)수정/( ,1)>삭제
arr1.splice(1, 2, 40, 50);


for(let ary of arr1){
    console.log(ary);
}

