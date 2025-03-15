"use strict";

/**
 * 배열의 평균값
 * @param {Array<number>} numbers - 정수 배열
 * @returns {number}
 */
function solution(numbers) {
    let sum = 0;

    numbers.forEach(item => {
        sum += item;
    });

    let result = sum / numbers.length;

    return result.toFixed(1);
}

/**
 * improved func
 * @description reduce 로 함수 간소화
 */
function improvedSoluction(numbers) {
    return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}