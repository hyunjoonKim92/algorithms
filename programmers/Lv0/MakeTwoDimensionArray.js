"use strict";

/**
 * 2차원으로 만들기
 * @param {Array<number>} num_list - 1차원 배열
 * @param {number} n - 2차원 배열로 나눌 수
 * @returns {Array<Array<number>>}
 */
function solution(num_list, n) {
    let arr = [];

    while (num_list.length) {
        arr.push(num_list.slice(0, n));
    }

    return arr;
}
