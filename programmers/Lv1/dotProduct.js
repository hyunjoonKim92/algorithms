"use strict"

// 내적 (프로그래머스)
function solution(a, b) {
    return a.reduce((acc, val, i) => acc + (val * (b[i])), 0);
}