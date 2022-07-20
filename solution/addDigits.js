"use strict"

// 자릿 수 더하기 (프로그래머스)
function solution(n) {

    return n.toString().split("").map(x => parseInt(x)).reduce((acc, cur) => acc + cur, 0);
}