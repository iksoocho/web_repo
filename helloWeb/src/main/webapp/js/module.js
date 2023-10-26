//module.js

import{friendInfo} from './friend.js'; //html파일에서 <script type="module" src="module.js"></script> 
import{calendar} from "../todo/calendar.js";

const friend = {
    name: 'Hong',
    phone: '010-3333-4444',
    address: 'eorn wndrn 200',
    showInfo: function(){
        return `이름은 ${this.name} 입니다.`;
    }
}
console.log(friend.showInfo());
console.log(friendInfo(friend));

calendar.showCalendar();