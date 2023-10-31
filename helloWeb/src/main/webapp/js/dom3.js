//dom3.js

//table>(thead>tr>th)+(tbody>tr>td)
import table from './domTable.js'

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=073U5fb29nj39xU8eVrWDhCrbQGhnC52koVFkfkUGcYky0EUHCo9iaphPxwMSd7AymFH%2Bptl6teN4uFi67UVMw%3D%3D';
let titles = ['센터id', '센터명', '의료원', '연락처','위도','경도']

fetch(url)
    //function(resolve) {return resolve.json()}
    .then(resolve => resolve.json())
    .then(fetchCallback)
    .catch(err => console.log('error=> ', err))




//fetch가 호출되는 callback 함수
function fetchCallback(result) {
    let rawData = result.data; //원래 데이터
    //console.log(rawData[0])


    // let sidoAry = new Set();  //sidoAry에 sido 정도 중복값 안들어 가도록
    // rawData.forEach(item => {
    //     sidoAry.add(item.sido)
    // });
    // console.log(sidoAry);
    let sidoAry = [];
    rawData.forEach(item => {
        if (sidoAry.indexOf(item.sido) == -1) {
            sidoAry.push(item.sido)
        }
    })
    sidoAry.unshift('지역 선택')


    //option 만들기
    let sidoSel = document.querySelector('#sidoList');
    sidoAry.forEach(item => {
        let option = document.createElement('option');
        option.innerHTML = item;
        sidoSel.append(option)
    })


    //select 태그에 change 이벤트 발생
    sidoSel.addEventListener('change', changeCallback)
    function changeCallback(e) {
        console.log(e.target.value);
        let searchSido = e.target.value;
        //선택된 시도 값에 맞는 센터만 출력
        let filterAry = rawData.filter(center => {
            return center.sido == searchSido;  
        })
        // console.log(filterAry)
        genTable(filterAry)
    }

    // genTable(filterAry);  //전체출력


    //초기값 > 대구광역시로
    let filterAry = rawData.filter(center => {
        return center.sido == "대구광역시";
    })
    genTable(filterAry);
}






function genTable(rawData = [], page = 1) {
    //초기화
    document.querySelector('#show').innerHTML = '';

    let thead = table.makeHead(titles); //헤더 정보
    // let mapData = rawData.map(center => { //매핑 정보
    //     let newCenter = {
    //         id: center.id,
    //         centerName: center.centerName.replace('코로나19', ''),
    //         org: center.org,
    //         phoneNumber: center.phoneNumber,
    //         lat: center.lat,
    //         lng: center.lng
    //     }
    //     return newCenter;
    // });
    let mapData = rawData.reduce((acc,center)=>{
        let newCenter = {
            id: center.id,
            centerName: center.centerName.replace('코로나19', ''),
            org: center.org,
            phoneNumber: center.phoneNumber,
            lat: center.lat,
            lng: center.lng
        }
        acc.push(newCenter)
        return acc
        
    },[])



    let tbody = table.makeBody(mapData); //[{},{},{}...]
    let table1 = document.createElement('table');
    table1.setAttribute('border', '1')
    table1.append(thead, tbody)
    //전체 데이터로 출력
    //append는 매개값 2개 받을수 있음
    document.querySelector('#show').append(table1);


    //tr 클릭 이벤트
    let targetTr = document.querySelectorAll('tbody tr')
    targetTr.forEach(tr=>{
        tr.addEventListener('click', function(e){
            console.log(tr.children[4].innerHTML,tr.children[5].innerHTML)
            let lat = tr.children[4].innerHTML;
            let lng = tr.children[5].innerHTML;
            window.open('daumapi.html?x='+lat+'&y='+lng);
        })
    })
}