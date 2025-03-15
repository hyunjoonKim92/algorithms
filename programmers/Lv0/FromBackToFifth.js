"use strict";

/**
 * 뒤에서 5등까지
 * @param {Array<number>} num_list - 정수 배열
 * @returns {Array<number>}
 */
function solution(num_list) {
    let answer = [];

    num_list.sort((a, b) => {
        return a - b;
    }).forEach((item) => {
        if (answer.length < 5) {
            answer.push(item);
        }
    });

    return answer;
}

/**
 * improved func
 * @description 전개 연산자로 배열 얕게 복사하여 처리
 */
function improvedSolution(num_list) {
    return [...num_list].sort((a, b) => a - b).slice(0, 5);
}
