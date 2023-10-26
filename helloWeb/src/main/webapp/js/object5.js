//object5.js  > 객체 복사

const obj1 = {
    name: "Hong",
    age: 20
}

const obj3 = obj1; //참조 변수를 받았기 때문에 주소를 받은 것 > obj1값 변경하면 obj3 값도 변한다

const obj2 = Object.assign({name: "Hwang", age:33, height : 180},obj1);
console.log(obj2);

obj2.age = 30;
console.log(obj2);
console.log(obj1);  //obj2 값을 변화시켜도 obj1 값은 안변함



//상속 > 상속을 통해 자식객체를 생성하면 부모객체를 참조 하고 있다가...
const obj4 = Object.create(obj1);
console.log(obj4);
console.log(obj4.name);
console.log(obj4.age);
obj4.name = "Cho";   //...자식 요소의 값이 바뀌는 시점부터 부모와 별개의 값 유지
obj1.name = "Park";
console.log(obj4.name);


//객체의 속성 정의. 객체의 속성기술인자

Object.defineProperty(obj1,'bloodType',{
    set: function(bt){
        if(bt=="A"|| bt=="B"|| bt=="AB"|| bt=="O"){
            this._bloodType=bt;
        }else{
            console.log('잘못된 유형입니다.')
            this._bloodType="A";
        }
    },
    get: function(){
        return this._bloodType;
    }
})
obj1.bloodType = "c";   //set
console.log(obj1.bloodType);  // get 

//속성 정의 시 속성값과 this 객체의 속성을 달리 하는 이유는