//dom2.js


//#show>table>tbody>tr>td
const fruits = [
    {name: "사과", price: 1000, farmer: "조익수"},
    {name: "복숭아", price: 1500, farmer: "박규현"},
    {name: "수박", price: 2000, farmer: "라희재"},
    {name: "포도", price: 3000, farmer: "나채현"}
]


let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.setAttribute('border','1')

fruits.forEach(item=>{
    let tr = document.createElement('tr');

    for(let prop in item){
        let td = document.createElement('td');
        td.innerHTML=item[prop];
        tr.appendChild(td)
    }
    tbody.appendChild(tr);
})
table.appendChild(tbody);





document.getElementById('show').appendChild(table);