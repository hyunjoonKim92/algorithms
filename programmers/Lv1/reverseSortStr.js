"use strict"

// 문자열 내림차순으로 배치하기 (프로그래머스)
function solution(s) {
    return s.split("").sort(function(a, b) {
        if (a > b) return -1;
        else if (a < b) return 1;
        else return 0;
    }).join("");
}

// improved fun
function improvedSolution(s) {
    return s.split("").sort().reverse().join("");
}