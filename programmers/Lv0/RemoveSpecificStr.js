"use strict";

// 특정 문자 제거하기 - 프로그래머스
function solution(my_string, letter) {
    return [...my_string].filter(val => val !== letter).join("");
}