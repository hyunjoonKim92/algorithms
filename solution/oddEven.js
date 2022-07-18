"use strict"

// 짝수와 홀수 (프로그래머스)
function solution(num) {

    let answer = '';

    num % 2 === 0 ? answer = 'Even' : answer = "Odd";

    return answer;
}