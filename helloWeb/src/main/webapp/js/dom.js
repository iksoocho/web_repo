//dom.js

const fruit = ['수박', '사과', '복숭아', '포도', '자두', '바나나', '오렌지']

//#show>ul>li
let ul = document.createElement('ul');


// for(let i=0;i<fruit.length;i++){
//     let li = document.createElement('li');
//     li.innerHTML = fruit[i];
//     document.querySelector('ul').appendChild(li);
// }

//forEach
fruit.forEach((item)=>{
    const li = document.createElement('li');  //<li></li>
    li.innerHTML = item;  //<li>수박</li>...
    ul.appendChild(li);   //<ul><li>수박</li><li>사과</li><li>...</ul>
})


document.getElementById('show').appendChild(ul);  // 화면에 출력

