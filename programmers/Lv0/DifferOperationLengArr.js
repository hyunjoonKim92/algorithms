"use strict";

/**
 * 배열의 길이에 따라 다른 연산하기
 * @param {Array<number>} arr - 정수 배열
 * @param {number} n - 더하기 위한 정수
 * @returns {Array<number>}
 */
function solution(arr, n) {
    let oddIdxArr = [];
    let evenIdxArr = [];

    arr.forEach((item, index) => {
        if (index % 2 === 0) {
            item = item + n;
        }

        oddIdxArr.push(item);
    });

    arr.forEach((item, index) => {
        if (index % 2 !== 0) {
            item = item + n;
        }

        evenIdxArr.push(item);
    });

    return arr.length % 2 === 0 ? evenIdxArr : oddIdxArr;
}

/**
 * improve func
 * @description map 으로 함수 간소화
 */
const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2 ? num + n : num
));
