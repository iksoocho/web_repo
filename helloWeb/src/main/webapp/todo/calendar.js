//calendar.js

const yoil = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
const lastDay = [31,28,31,30,31,30,31,31,30,31,30,31]

const calendar = {
    makeHead(){
        let st = "";
        st+='<table border="1"><thead><tr>';
        for(let prop in yoil){
            st+='<td>'+yoil[prop] +'</td>';
        }
        
        st+='</tr></thead>';
        this.html = st;
    },
    html: '',
    makeBody(mon){
        let str="";
        str+='<tbody><tr>';
        for(let i =1 ; i<lastDay[mon-1]+1; i++){
            str+='<td>'+i+'</td>'
            if(i%7==0){
                str+='<br>';
            }
        };
        str+='</tr></tbody></table>';
        this.html = str;
    },
    
    makeCalendar(dom){
        dom.innerHTML = this.html;
    }
}


calendar.makeHead();
calendar.makeBody(10);
calendar.makeCalendar(document.getElementById('show'));