//object4.js

const obj = {
    sno: 1001,
    sname: '홍길동',
    address: '대구 중구 100번지',
    friends: [
        {name: '김민식', phone: '010-1111'},
        {name: '최현수', phone: '010-8888'}
    ],
    hobbies:[
        '독서','영화감상','여행','요리'
    ]
}

console.log('이름은 ',obj.sname,'입니다.');
console.log('친구는 ', obj.friends.length,'명 입니다.')
console.log('첫번째 친구의 이름은 ', obj['friends'][0]['name'],'입니다.') //표현방식 2가지 
obj.friends[1].phone='010-3333'
console.log('두번째 친구 전화번호는 ', obj.friends[1].phone,'입니다.')  //표현방식 2가지

obj.hobbies.forEach(hobby => {
    console.log(hobby)
});

obj.pets = ['고양이', '멍멍이', '거북이', '기니피그']
console.log(obj.pets[2])
obj.pets[2]='금붕어'
console.log(obj.pets[2])


obj.addFriends = function(friend){
    this.friends.push(friend);
}
obj.addFriends({name:'박현수',phone:'010-4444'});
console.log(obj.friends[2])

