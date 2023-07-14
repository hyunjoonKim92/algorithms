"use strict"

// 예산 (프로그래머스)
function solution(d, budget) {
    let answer = 0;
    let sum = 0;

    d.sort((a, b) => a - b);

    for (let i = 0, len = d.length; i < len; i++) {
        sum += d[i];

        if (sum > budget) {
            answer = i;

            break;
        }
    }

    if (sum <= budget) {
        answer = d.length;
    }

    return answer;
}