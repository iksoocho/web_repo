//calendar.js
const today = new Date();

const yoil = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
const lastDay = [31,28,31,30,31,30,31,31,30,31,30,31]

const calendar = {
    html: '',
    makeHead(){
        let st = "";
        st+='<thead><tr>';
        for(let prop in yoil){
            if(yoil[prop]=='일요일'){
                st+='<td style="color:red">'+ yoil[prop] +'</td>';
            }else if(yoil[prop]=='토요일'){
                st+='<td style="color:blue">'+yoil[prop] +'</td>';
            }else{

                st+='<td>'+yoil[prop] +'</td>';
            }
        }
        st+='</tr></thead>';
        return st;
    },
    
    makeBody(mon){
        let str="";
        str+='<tbody><tr>';
        for(let i =1 ; i<=lastDay[mon-1]; i++){
            if(i==today.getDate()){
                str+='<td style="background-color:yellow">'+i+'</td>'
            }else if(i%7==1){
                str+='<td style="color:red">'+i+'</td>'
            }else if(i%7==0){
                
                str+='<td style="color:blue">'+i+'</td>'
            }else{

                str+='<td>'+i+'</td>'
            }
            if(i%7==0){
                str+='<tr></tr>';
            }
        };
        str+='</tr></tbody>';
        return str;
    },


    makeCalendar(dom){
        for(let i=1;i<=12;i++){
            let monthH = calendar.makeHead();
            let monthB = calendar.makeBody(i);
            this.html = `<p>${i}월</p><table border="1">`+monthH+monthB+'</table><br>'; 
            dom.innerHTML += this.html;
        }
    },

    showCalendar(){
        this.makeCalendar(document.getElementById('show'));
    }
}



export {calendar}

