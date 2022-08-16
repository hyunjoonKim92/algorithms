"use strict"

// 위장 (프로그래머스)
// ABC + AB + AC + BC + A + B + C => (A + 1)(B + 1)(C + 1) - 1
function solution(clothes) {

    let answer = 1;
    let obj = {};

    for (let i = 0, len = clothes.length; i < len; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }

    for (let key in obj) {
        answer *= obj[key];
    }

    return answer - 1;
}

// 개선된 함수
function improvedSolution(clothes) {

    return Object.values(clothes.reduce((obj, t)=> {
		obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;

		return obj;
    }, {})).reduce((a, b)=> a * (b + 1), 1) -1;
}