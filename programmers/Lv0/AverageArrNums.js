"use strict";

// 배열의 평균값 - 프로그래머스
function solution(numbers) {
    let sum = 0;

    numbers.forEach(item => {
        sum += item;
    });

    let result = sum / numbers.length;

    return result.toFixed(1);
}

// improved fun
function improvedSoluction(numbers) {
    return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}