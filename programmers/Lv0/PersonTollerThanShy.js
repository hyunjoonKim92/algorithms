"use strict"

// 머쓱이보다 키 큰 사람 - 프로그래머스
function solution(array, height) {
    let answer = 0;

    array.forEach(item => {
        if (item > height) {
            answer++;
        }
    });

    return answer;
}

// improved func
function improvedSolution(array, height) {
    let answer = array.filter(item => item > height);

    return answer.length;
}