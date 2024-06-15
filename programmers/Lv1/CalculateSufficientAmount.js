"use strict"

// 부족한 금액 계산하기 - 프로그래머스
function solution(price, money, count) {
    let usePrice = 0;

    for (let i = 1, len = count; i <= len; i++) {
        usePrice += price * i;
    }

    return money - usePrice < 0 ? usePrice - money : 0;
}

// improved func (가우스 공식)
function improvedSolution(price, money, count) {
    const calPrice = price * count * (count + 1) / 2 - money;

    return calPrice > 0 ? calPrice : 0;
}