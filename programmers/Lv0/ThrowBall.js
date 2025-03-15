'use strict'

// 프로그래머스 - 공 던지기
function solution(numbers, k) {
    let pointer = 1;

    for (let i = 0; i < k - 1; i++) {
        pointer += 2;

        if (pointer > numbers.length) {
            pointer -= numbers.length;
        }
    }

    return pointer;
}

// improved func
function improvedSoluction(numbers, k) {
    return numbers[((k - 1) * 2) % numbers.length];
}