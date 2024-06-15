"use strict"

// 없는 숫자 더하기 - 프로그래머스
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur);
}