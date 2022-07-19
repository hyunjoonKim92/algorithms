"use strict"

// 정수 내림차순으로 배치하기 (프로그래머스)
function solution(n) {

    return Number(n.toString().split("").sort((a, b) => b - a).join(""));
}