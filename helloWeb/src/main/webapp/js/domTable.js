/**
 * domTable.js
 */

export default {
    hiddenFields: ['lat','lng'],
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
        tr.setAttribute('data-lat',center.lat)    //data-XXX > XXX의 값만 가져온다(tr.dataset.lat)
        tr.setAttribute('data-lng',center.lng)

        for (let prop in center) {
            if(this.hiddenFields.indexOf(prop) > -1){
                
                continue;
            }
            let td = document.createElement('td')
            td.innerHTML = center[prop];
            tr.append(td);
        }
        return tr;
    }
}