"use strict"

// 약수의 합 - 프로그래머스
function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }

    return answer;
}