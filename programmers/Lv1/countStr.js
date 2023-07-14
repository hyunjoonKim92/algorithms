"use strict"

// 문자열 내 p와 y의 개수 (프로그래머스)
function solution(s) {
    let pLen = 0;
    let yLen = 0;

    s.split("").forEach(item => {
        if (item === "p" || item === "P") {
            pLen++;
        } else if (item === "y"|| item === "Y") {
            yLen++;
        }
    });

    return pLen === yLen ? true : false;
}

// improved fun
function improvedSolution(s) {
    return (s.match(/p/ig||[])).length === (s.match(/y/ig||[])).length;
}