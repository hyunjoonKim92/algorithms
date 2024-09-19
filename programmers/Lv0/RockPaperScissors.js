'use strict';

// 가위 바위 보 - 프로그래머스
function solution(rsp) {
    let answer = '';

    rsp.split('').forEach(item => {
       switch (item) {
           case '2':
               return answer += '0';
               break;
           case '0':
               return answer += '5';
               break;
           case '5':
               return answer += '2';
               break;
        }
    });

    return answer;
}

// improved func
function improvedSoluction(rsp) {
    let answer = {
        2: 0,
        0: 5,
        5: 2,
    };

    return [...rsp].map(v => answer[v]).join('');
}