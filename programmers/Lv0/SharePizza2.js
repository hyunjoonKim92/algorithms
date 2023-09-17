"use strict";

// 피자 나눠 먹기 (2) - 프로그래머스
function solution(n) {
    let result = 1;

    while ((result * 6) % n !== 0) {
        result++;
    }

    return result;
}