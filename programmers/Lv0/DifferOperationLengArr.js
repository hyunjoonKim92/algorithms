"use strict"

// 배열의 길이에 따라 다른 연산하기 - 프로그래머스
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

// improve func
const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2 ? num + n : num
));