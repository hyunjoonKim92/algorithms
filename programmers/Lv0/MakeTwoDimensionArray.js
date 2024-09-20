'use strict';

/**
 * 2차원으로 만들기 - 프로그래머스
 * @param {num_list} 1차원 배열
 * @param {n} 2차원 배열로 나눌 수
 * @returns {Array}
 */
function solution(num_list, n) {
    let arr = [];

    while (num_list.length) {
        arr.push(num_list.slice(0, n));
    }

    return arr;
}