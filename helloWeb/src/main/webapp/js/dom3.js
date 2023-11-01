//dom3.js

//table>(thead>tr>th)+(tbody>tr>td)
import table from './domTable.js'

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=073U5fb29nj39xU8eVrWDhCrbQGhnC52koVFkfkUGcYky0EUHCo9iaphPxwMSd7AymFH%2Bptl6teN4uFi67UVMw%3D%3D';
let titles = ['센터id', '센터명', '연락처', '시도', '주소']

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

    genTable(rawData); //초기값  ==(rawData,1)


    //초기값 10개만 출력
    // let filterAry = rawData.filter((center,idx) => {
    //     return idx <10;
    // })
    // genTable(filterAry);
}






function genTable(rawData = [], page = 1) { //두번째 매개변수를 넘기지 않으면 1이 초기값으로 알아서 들어감
    //초기화
    document.querySelector('#show').innerHTML = '';

    //첫번째, 마지막
    let startNo = (page - 1) * 5; //화면에 나오는 데이터 수
    let endNo = (page * 5);

    //첫번째, 마지막 페이지 계산
    let totalCnt = rawData.length;
    let lastPage = Math.ceil(totalCnt / 5); //5으로 나눈 몫을 올림  페이지 수

    // let endPage = Math.ceil(page/5)*5;
    // let beginPage = endPage-4;
    const pageShow = 5;
    let beginPage = Math.max(1, page - Math.floor(pageShow / 2));
    let endPage = Math.min(lastPage, beginPage + pageShow - 1);
    let prevPage = false;
    let nextPage = false;
    if (beginPage > 1) {
        prevPage = true;
    }
    if (endPage < lastPage) {
        nextPage = true;
    }

    if (endPage > lastPage) { //실제 페이지와 aTag 페이지를 같게 만드는 작업
        endPage = lastPage
    }
    document.querySelector('.pagination').innerHTML = '';

    //이전 페이지 존재 여부
    if (prevPage) {
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&laquo';
        aTag.addEventListener('click', function () {
            genTable(rawData, beginPage - 1);
        })
        document.querySelector('.pagination').append(aTag);
    }

    //전체페이지
    for (let i = beginPage; i <= endPage; i++) {
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = i;
        if (i == page) {
            aTag.setAttribute('class', 'active')
        }
        aTag.addEventListener('click', function () {
            genTable(rawData, i);
        })
        document.querySelector('.pagination').append(aTag);
    }
    //다음 페이지
    if (nextPage) {
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&raquo';
        aTag.addEventListener('click', function () {
            genTable(rawData, endPage + 1);
        })
        document.querySelector('.pagination').append(aTag);
    }



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

    //페이징
    let mapData = rawData.reduce((acc, center, idx) => {
        if (idx >= startNo && idx < endNo) {
            let newCenter = {
                id: center.id,
                centerName: center.centerName.replace('코로나19', ''),

                phoneNumber: center.phoneNumber,
                sido: center.sido,
                address: center.address,
                lat: center.lat,
                lng: center.lng
            }
            acc.push(newCenter)
        }
        return acc

    }, [])



    let tbody = table.makeBody(mapData); //[{},{},{}...]
    let table1 = document.createElement('table');
    table1.setAttribute('border', '1')
    table1.append(thead, tbody)
    //전체 데이터로 출력
    //append는 매개값 2개 받을수 있음
    document.querySelector('#show').append(table1);


    //tr 클릭 이벤트
    let targetTr = document.querySelectorAll('tbody tr')
    targetTr.forEach(tr => {
        tr.addEventListener('click', function (e) {
            console.log(tr.dataset.lat, tr.dataset.lng)
            let lat = tr.dataset.lat;
            let lng = tr.dataset.lng;
            window.open('daumapi.html?x=' + lat + '&y=' + lng);
        })
    })
}