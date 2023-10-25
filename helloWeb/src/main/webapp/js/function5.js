//function5.js

let sum1 = 0;
[10,20,30].forEach(function(item){
    sum1+=item;     //comsumer : 매개값을 소진, 반환값 없음
})
console.log('forEach : '+sum1);



sum1 = 0;
sum1 = [10,20,30].reduce(function(acc, item, idx, ary){
    //console.log(acc, item, idx);
    return acc+item;      //function : 매개값을 소진해서 반환값 생성
},0)    //0: acc 초기값
console.log('reduce : '+sum1);



function sum(a=0, b=0, ...args){  //parameters 
    console.log(args);
    
    // return a+b+args.reduce(function(acc,item){
    //                     return acc+item;
    //                 });

    //return a+b+args.reduce((acc,item)=>acc+item);

    let result = 0;
    result = a+b;
    // args.forEach(function(num){
    //     result += num;
    // })

    args.forEach(num=>result+=num)
    return result;
}
console.log(sum(10,20,30,40,50,60,70,80,90,100)); //arguments

//reduce 연습
const numAry = [4,2,11,6,9,7,10]
let max = 0;
//max = numAry.reduce((acc,item)=>acc > item ? acc : item)
max = numAry.reduce(function(acc,item){
    if(acc>item){
        return acc;
    }else{
        return item;
    }
});
console.log('최대값 : '+max);