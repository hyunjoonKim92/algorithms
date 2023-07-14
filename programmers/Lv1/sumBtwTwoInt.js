"use strict"

// 두 정수 사이의 합 (프로그래머스)
function solution(a, b) {
    let answer = 0;
    
    if (a > b) {
        for (let i = b, len = a; i <= len; i++) {
            answer += i;
        }
    } else {
        for (let i = a, len = b; i <= len; i++) {
            answer += i;
        }
    }

    return answer;
}

// improved fun
// 가우스 공식 (등차수열의 합) => n(x+y)/2, x는 작은 수, y는 큰 수, n은 x와 y사이의 정수의 개수 => ((y-x)+1)(x+y)/2
function improvedSolution(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}