"use strict"

// 뒤에서 5등까지 (프로그래머스)
function solution(num_list) {
    let answer = [];

    num_list.sort((a, b) => {
        return a - b;
    }).forEach((item) => {
        if (answer.length < 5) {
            answer.push(item);
        }
    });

    return answer;
}

// improved fun
function improvedSolution(num_list) {
    return [...num_list].sort((a, b) => a - b).slice(0, 5);
}