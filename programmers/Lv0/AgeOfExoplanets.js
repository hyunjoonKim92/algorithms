"use strict";

// 프로그래머스 - 외계행성의 나이
function solution(age) {
    const str = 'abcdefghij';

    return age.toString().split("").map(i => str[+i]).join("");
}