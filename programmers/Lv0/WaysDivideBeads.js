'use strict';

/**
 * 구슬을 나누는 경우의 수 - 프로그래머스
 * @param {balls} - 구슬 
 * @param {share} - 나눠가질 사람 
 * @returns {number}
 * @description 조합 n! / (n - m)! * m!
 * @description 재귀 팩토리얼 n(n-1)(n-2)(n-3)...1
 */
const fac = (num) => (num === 0 ? 1 : num * fac(num - 1));

function solution(balls, share) {
    return Math.round(fac(balls) / (fac(balls - share) * fac(share)));
}