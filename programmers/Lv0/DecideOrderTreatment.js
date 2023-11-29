"use strict";

// 프로그래머스 - 진료순서 정하기
function solution(emergency) {
    return emergency.map(v => [...emergency].sort((a, b) => b - a).indexOf(v) + 1);
}