"use strict"

// 자연수 뒤집어 배열로 만들기 - 프로그래머스
function solution(n) {
    return n.toString().split("").reverse().map((i) => Number(i));
}