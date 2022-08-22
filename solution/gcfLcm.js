"use strict"

// 최소 공배수, 최대 공약수 (프로그래머스)
// 유클리드 호제법
function solution(n, m) {
    // 최대 공약수 => 유클리드 호제법 재귀 함수
    const gcf = (a, b) => {
        if (b === 0) {
            return a;
        }

        return gcf(b, a % b);
    }

    // 최소 공배수 => a * b / 최대 공약수
    const lcm = (a, b) => (a * b) / gcf(a, b);

    return [gcf(n, m), lcm(n, m)];
}