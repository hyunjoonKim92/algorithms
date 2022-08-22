"use strict"

// 문자열 다루기 기본 (프로그래머스)
function solution(s) {
    let answer = true;

    if (s.length === 4 || s.length === 6) {
        s.toString().split("").forEach(item => {
            let ascii = item.charCodeAt();

            if (ascii < 48 || ascii > 57) {
                answer = false;
            }
        });   
    } else {
        answer = false;
    }

    return answer;
}