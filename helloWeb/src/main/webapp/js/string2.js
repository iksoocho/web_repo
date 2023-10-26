//string2.js

const words = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate animi, sed quaerat tempore minus, cumque laudantium expedita omnis repellendus unde hic, error neque? Hic quas earum esse consequuntur nulla iusto.';


//1.공백을 기준으로 가져온 단어의 크기가 5 보다 큰 문자열을 콘솔에 출력
const text = words.split(" ");
for(let word of text){
    if(word.length>5){
        console.log(word);
    }
}

//2.주민번호 입력 => 남자인지 여자인지 구별
function checkGender(ssn){
    let ssn1 = ssn.replace(' ','');
    let ssn2 = ssn.replace('-','');
    if(ssn1.charAt(6)==1 || ssn1.charAt(6)==3 || ssn2.charAt(6)==1 || ssn2.charAt(6)==3){
        return '남자';
    }else if(ssn1.charAt(6)==2 || ssn1.charAt(6)==4 || ssn2.charAt(6)==2 || ssn2.charAt(6)==4){
        return '여자';
    }else{
        console.log('옳바르게 입력하세요.');
    }
}
let ssn = '001212-22324567';
console.log(checkGender(ssn));

//3.파일명과 파일의 확장자
let file = "d:/temp/sample/java/js/book.html";

let fileName = file.split('.')[0].split('/').reverse()[0];
console.log(fileName);

let fileExt = file.split('.').reverse()[0];
console.log(fileExt);
