"use strict";

// 중앙값 구하기 - 프로그래머스
function solution(array) {
    const midIdx = Math.floor(array.length / 2);
    const sortArr = array.sort((a, b) => a - b);

    return sortArr[midIdx];
}