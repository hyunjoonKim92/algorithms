"use strict"

// 두 수의 차 - 프로그래머스
function solution(num1, num2) {
    if (-50000 > num1 && num1 > 50000) return;
    if (-50000 > num1 && num2 > 50000) return;

    return num1 - num2;
}