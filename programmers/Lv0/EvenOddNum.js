"use strict";

/**
 * 짝수 홀수 갯수
 * @param {Array<number>} num_list - 정수 배열
 * @returns {Array<number>}
 */
function solution(num_list) {
    let odd_num = 0;
    let even_num = 0;

    for (let i = 0, len = num_list.length; i < len; i++) {
        if (num_list[i] % 2 === 0) {
            even_num++;
        } else {
            odd_num++;
        }
    }

    return [even_num, odd_num];
}
