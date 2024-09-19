'use strict';

/**
 * 점의 위치 구하기 - 프로그래머스
 * @param {dot} 배열로 이루어진 점 
 * @returns {number}
 */
function solution(dot) {
    if (dot[0] > 0 && dot[1] > 0) {
        return 1;
    } else if (dot[0] < 0 && dot[1] > 0) {
        return 2;
    } else if (dot[0] < 0 && dot[1] < 0) {
        return 3;
    } else {
        return 4;
    }
}

/**
 * improved func
 * @description 구조분해 및 삼항연산자
 */
function improvedSoluction(dot) {
    const [num1, num2] = dot;
    const check = num1 * num2 > 0;

    return num1 > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}