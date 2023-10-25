        //함수선언문
        // function myFunc(student, score=60 ){  //초기밧 넣어 줄수 있음
        //     // if(score == undefined){
        //     //     score=0;
        //     // }
        //     console.log(`${student}의 점수는 ${score}점 입니다.`)
        //     return score;
        // }


        //함수표현식
        var myFunc = function myFunc(student, score = 60) { //초기밧 넣어 줄수 있음
            // if(score == undefined){
            //     score=0;
            // }
            console.log(`${student}의 점수는 ${score}점 입니다.`)
            return score;
        }

        console.log(myFunc('홍길동'));