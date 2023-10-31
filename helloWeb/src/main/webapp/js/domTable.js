/**
 * domTable.js
 */

export default {
    makeHead: function (titles = []) {
        //thead>tr>th*n
        let thead = document.createElement('thead')
        thead.setAttribute('style','background-color:pink')
        let tr = document.createElement('tr')
        titles.forEach(item => {
            let th = document.createElement('th')
            
            th.innerHTML = item;
            tr.append(th); //appendChild랑 같음
        })
        thead.append(tr)
        return thead;
    },

    makeBody: function (dataAry = []) {
        let tbody = document.createElement('tbody');
        dataAry.forEach(item => {
            tbody.append(this.makeTr(item));
        })
        return tbody;
    },

    makeTr: function (center = {}) {
        let tr = document.createElement('tr');
        for (let prop in center) {
            let td = document.createElement('td')
            td.innerHTML = center[prop];
            tr.append(td);
        }
        return tr;
    }
}