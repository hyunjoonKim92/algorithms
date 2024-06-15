"use strict";

// 순서쌍의 개수 - 프로그래머스
function soluction(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }

    return arr.length;
}

// improved func
function improvedSoluction(n) {
    return Array(n).fill(1).map((v, i) => v + i).filter(v => n % v === 0).length;
}