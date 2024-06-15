"use strict"

// 서울에서 김서방 찾기 - 프로그래머스
function solution(seoul) {
    let answer = '김서방은 ';
    let idx;

    seoul.forEach((item, index) => {
         if (item === "Kim") {
             idx = index;
         }
    });

    return answer + idx.toString() +  '에 있다';
}

// improved func
function improvedSolution(seoul) {
    let idx = seoul.indexOf("Kim");

    return "김서방은 " + idx.toString() + "에 있다"; 
}