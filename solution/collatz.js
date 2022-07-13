"use strict"

// 콜라츠 추측 (프로그래머스)

let c = -1;

function solution(num) {

    let answer = 0;
    let cnt = 0;

    if (recursionFunc(num, cnt) === 1) {
        answer = c;
    } else {
        answer = recursionFunc(num, cnt);
    }

    return answer;
}

function recursionFunc(num, cnt) {

    cnt++;
    c++;

    if (cnt > 500) {
        return -1;
    } else {
        if (num === 1) {
            return 1;
        } else {
            return num % 2 === 0 ? recursionFunc(num / 2, cnt) : recursionFunc(num * 3 + 1, cnt);
        }
    }
}

// 개선된 함수
function improvedSolution(num) {

    let answer = 0;

    while (num !== 1 && answer !== 500) {
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        answer++;
    }

    return num === 1 ? answer : -1;
}