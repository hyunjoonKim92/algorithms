"use strict"

// 같은 숫자는 싫어 (프로그래머스)
function solution(arr) {

    let answer = [];
    let compare = arr[0];

    answer.push(compare);

    arr.forEach(item => {
        if (compare !== item) {
            compare = item;
            answer.push(compare);
        }
    });

    return answer;
}

// 개선된 함수
function improvedSolution(arr) {
    return arr.filter((elem, index) => elem !== arr[index + 1]);
}