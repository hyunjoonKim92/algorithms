"use strict";

/**
 * 배열 비교하기
 * @param {Array<number>} arr1 - 비교할 첫번째 배열
 * @param {Array<number>} arr2 - 비교할 두번째 배열
 * @returns {number}
 */
function solution(arr1, arr2) {
    let answer = 0;

    if (arr1.length < arr2.length) {
        answer = -1;
    } else if (arr1.length > arr2.length) {
        answer = 1;
    } else {
        const f = arr1.reduce((acc, cur) => acc + cur);
        const s = arr2.reduce((acc, cur) => acc + cur);

        if (f > s) {
            answer = 1;
        } else if (f < s) {
            answer = -1;
        } else {
            answer = 0;
        }
    }

    return answer;
}
