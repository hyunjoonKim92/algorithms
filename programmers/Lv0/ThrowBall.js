"use strict";

/**
 * 공 던지기
 * @param {Array<number>} numbers - 정수 배열
 * @param {number} k - 공 던지는 사람의 index
 * @returns {number}
 */
function solution(numbers, k) {
    let pointer = 1;

    for (let i = 0; i < k - 1; i++) {
        pointer += 2;

        if (pointer > numbers.length) {
            pointer -= numbers.length;
        }
    }

    return pointer;
}

/**
 * improved func
 * @description 문제풀이 간소화
 */
function improvedSoluction(numbers, k) {
    return numbers[((k - 1) * 2) % numbers.length];
}
