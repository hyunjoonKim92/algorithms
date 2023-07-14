"use strict"

// 하샤드 수 (프로그래머스)
function solution(x) {
    let answer = true;
    let sum = 0;
    let arr = String(x).split("");
    
    arr.forEach(num => {
        sum += Number(num); 
    });

    answer = x % sum === 0 ? true : false;

    return answer;
}