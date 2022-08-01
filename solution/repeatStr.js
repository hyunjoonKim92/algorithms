"use strict"

// 수박수박수박수... (프로그래머스)
function solution(n) {

    let answer = "";

    for (let i = 0, len = n; i < len; i++) {
        answer += i % 2 === 0 ? "수" : "박";        
    }

    return answer;
}

// 개선된 함수
function improvedSolution(n) {

    return "수박".repeat(n).slice(0, n);
}