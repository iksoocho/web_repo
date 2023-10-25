//object1.js

//Member 클래스 밖에서 메소드 정의:prototype > 해당 파일 안에서만 사용 가능
Member.prototype.setBloodType = function(bloodType){
    this.bloodType = bloodType;
}
Member.prototype.getBloodType = function(){
    return this.bloodType;
}
const mem2 = new Member('조익수',22,176.4);
mem2.setBloodType('A');
console.log(mem2.name+`의 혈액형 : `+mem2.bloodType);



//기존에 있던 String 클래스에 새로운 메소드 추가:prototype > 해당 파일 안에서만 사용 가능
String.prototype.truncate = function(){
    console.log(this);
    return this.substring(0,5);
}

let result = "안녕HelloWorld".truncate();
console.log(result);