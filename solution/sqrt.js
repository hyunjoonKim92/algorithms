"use strict"

// 정수 제곱근 판별하기 (프로그래머스)
function solution(n) {

    return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}