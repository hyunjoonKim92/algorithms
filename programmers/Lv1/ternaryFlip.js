"use strict"

// 3진법 뒤집기 - 프로그래머스
function solution(n) {
    return parseInt(n.toString(3).split("").reverse().join(""), 3);
}