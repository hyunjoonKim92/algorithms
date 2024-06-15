"use strict"

// k번째 수 - 프로그래머스
function solution(array, commands) {
    let answer = [];

    commands.forEach(command => {
        answer.push((array.slice(command[0] - 1, command[1]).sort((a, b) => a - b))[command[2] - 1]);
    });

    return answer;
}