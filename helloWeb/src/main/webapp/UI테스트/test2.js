//test2.js

const yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const novemberCal = {
    html: '',
    makeHead() {
        let st = "";
        st += '<thead><tr>';
        for (let prop in yoil) {
            if (yoil[prop] == '일요일') {
                st += '<td style="color:red">' + yoil[prop] + '</td>';
            } else if (yoil[prop] == '토요일') {
                st += '<td style="color:blue">' + yoil[prop] + '</td>';
            } else {

                st += '<td>' + yoil[prop] + '</td>';
            }
        }
        st += '</tr></thead>';
        return st;
    },
    makeBody() {
        let str = "";
        str += '<tbody><tr>';
        str += '<td></td><td></td><td></td>'
        for (let i = 1; i <= 30; i++) {
            if(i%7==5){
                str+='<td style="color:red">'+i+'</td>'
            }else if(i%7==4){
                str+='<td style="color:blue">'+i+'</td>'
            }else{
                str += '<td>' + i + '</td>'
            }
            if (i % 7 == 4) {
                str += '<tr></tr>';
            }
        };
        str += '</tr></tbody>';
        return str;
    },
    makeCalendar(dom) {

        let monthH = novemberCal.makeHead();
        let monthB = novemberCal.makeBody();
        this.html = `<p>11월</p><table border="1">` + monthH + monthB + '</table>';
        dom.innerHTML += this.html;

    },

    show() {
        this.makeCalendar(document.getElementById('show'));
    }
}

novemberCal.show();