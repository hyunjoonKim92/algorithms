"use strict"

// 나누어 떨어지는 숫자 배열 - 프로그래머스
function solution(arr, divisor) {

    let answer = [];
    let none = 0;

    arr.forEach(elem => {
        if (elem % divisor === 0) {
            answer.push(elem);
        } else {
            none += 1;
        }
    });

    if (none !== 0 && answer.length === 0) {
        answer.push(-1);
    }

    answer.sort((a, b) => a - b);
    
    return answer;
}

// improved func
function improvedSolution(arr, divisor) {
    let answer = arr.filter(v => v % divisor == 0);

    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}