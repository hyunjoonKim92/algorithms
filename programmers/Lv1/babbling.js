"use strict"

// 옹알이 (프로그래머스)
function solution(babbling) {
    let answer = 0;

    for (let text of babbling) {
        if (/(aya|ye|woo|ma)\1+/g.test(text)) continue;
        if (/^(aya|ye|woo|ma)+$/g.test(text)) {
            answer++;
        }
    }

    return answer;
}