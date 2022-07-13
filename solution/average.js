"use strict"

// 평균 구하기 (프로그래머스)
function solution(arr) {

    let answer = 0;
    let sum = 0;

    arr.forEach(num => {
        sum += num;
    });

    answer = sum / arr.length;

    return answer;
}