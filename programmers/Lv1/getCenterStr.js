"use strict"

// 가운데 글자 가져오기 (프로그래머스)
function solution(s) {
    let answer = '';
    let strArr = s.split("");

    if (strArr.length % 2 === 0) {
        answer = 
            strArr[(strArr.length - 1) - ((strArr.length - 1) - (Math.floor((strArr.length - 1) / 2)))] + 
            strArr[strArr.length - (strArr.length - (Math.floor(strArr.length / 2)))];
    } else {
        answer = strArr[strArr.length - (strArr.length - Math.floor(strArr.length / 2))];
    }

    return answer;
}

// improved fun
function improvedSolution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}