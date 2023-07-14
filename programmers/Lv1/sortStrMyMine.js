"use strict"

// 문자열 내 마음대로 정렬하기 (프로그래머스)
function solution(strings, n) {
    strings.sort(function(a, b) {
        let str1 = a.split("")[n].charCodeAt();
        let str2 = b.split("")[n].charCodeAt();

        if (str1 < str2) return -1;
        else if (str1 > str2) return 1;
        else if (str1 === str2) {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        }

        return 0;
    });

    return strings;
}

// 1과 2를 비교했을 때, 속도는 1이 더 빠르다.
// improved fun 1
function improvedSolution1(strings, n) {
    return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

// improved fun 2
function improvedSolution2(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}