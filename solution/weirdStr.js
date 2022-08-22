"use strict"

// 이상한 문자열 만들기 (프로그래머스)
function solution(s) {
    return s.split(' ').map(items => items.split('').map((item, index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join('')).join(' ');
}