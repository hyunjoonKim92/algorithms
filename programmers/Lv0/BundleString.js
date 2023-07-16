"use strict"

// 문자열 묶기 (프로그래머스)
function solution(strArr) {
    const diction = {};

    strArr.forEach(item => {
        const len = item.length;

        diction[len] = diction[len] ?? [];
        diction[len].push(item);
    });

    return Math.max(...Object.values(diction).map(a => a.length));
}