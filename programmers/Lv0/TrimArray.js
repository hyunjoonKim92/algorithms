"use strict";

// 배열 자르기 - 프로그래머스
function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}