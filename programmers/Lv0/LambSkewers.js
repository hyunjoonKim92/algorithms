"use strict";

// 양꼬치 - 프로그래머스
function solution(n, k) {
    return 12000 * n + 2000 * k - Math.floor(n / 10) * 2000;
}