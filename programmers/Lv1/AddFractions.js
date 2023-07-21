"use strict"

// 분수의 덧셈 (프로그래머스)
function calulateGCD(a, b) {
    return a % b === 0 ? b : calulateGCD(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let denum = numer1 * denom2 + numer2 * denom1;
    let num = denom1 * denom2;
    let gcd = calulateGCD(denum, num);

    return [denum / gcd, num / gcd];
}