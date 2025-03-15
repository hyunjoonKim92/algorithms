"use strict";

/**
 * 머쓱이보다 키 큰 사람
 * @param {Array<number>} array - 키가 담긴 정수 배열
 * @param {number} height - 키
 * @returns {number}
 */
function solution(array, height) {
    let answer = 0;

    array.forEach(item => {
        if (item > height) {
            answer++;
        }
    });

    return answer;
}

/**
 * improved func
 * @description filter 로 함수 간소화
 */
function improvedSolution(array, height) {
    return array.filter(item => item > height).length;
}
