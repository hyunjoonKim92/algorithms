"use strict"

// 소수 구하기 - 프로그래머스, 에라토스테네스의 체
function solution(n) {
    let arr = [];

    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }

    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) continue;

        for (let j = i * 2; j <= n; j += i) {
            arr[j] = 0;
        }
    }

    return arr.filter(num => num !== 0).length;
}