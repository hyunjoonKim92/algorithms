"use strict";

// 아이스 아메리카노 - 프로그래머스
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}