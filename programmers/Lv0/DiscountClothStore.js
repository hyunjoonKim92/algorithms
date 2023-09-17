"use strict";

// 옷가게 할인 받기 - 프로그래머스
function solution(price) {
    let result = 0;

    switch(true) {
        case (price >= 500000):
            result = price - price * 0.20;
            break;
        case (price >= 300000):
            result = price - price * 0.10;
            break;
        case (price >= 100000):
            result = price - price * 0.05;
            break;
        default:
            result = price;
    }

    return Math.floor(result);
}