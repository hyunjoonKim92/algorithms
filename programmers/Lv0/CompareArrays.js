"use strict"

// 배열 비교하기 (프로그래머스)
function solution(arr1, arr2) {
    let answer = 0;

    if (arr1.length < arr2.length) {
        answer = -1;
    } else if (arr1.length > arr2.length) {
        answer = 1;
    } else {
        const f = arr1.reduce((acc, cur) => acc + cur);
        const s = arr2.reduce((acc, cur) => acc + cur);

        if (f > s) {
            answer = 1;
        } else if (f < s) {
            answer = -1;
        } else {
            answer = 0;
        }
    }

    return answer;
}