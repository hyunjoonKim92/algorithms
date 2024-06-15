"use strict";

// 문자 반복 출력하기 - 프로그래머스
function solution(my_string, n) {
    const strArr = my_string.split("");

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = (strArr[i].repeat(n));
    }

    return strArr.join("");
}

// improved func
function improvedSolution(my_string, n) {
    return [...my_string].map(val => val.repeat(n)).join("");
}
