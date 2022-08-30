"use strict"

// 두 개 뽑아서 더하기 (프로그래머스)
function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    answer = answer.filter((e, i) => {
        return answer.indexOf(e) === i;
    });

    answer.sort((a, b) => a - b);

    return answer;
}

// 개선된 함수
// Set 객체 사용하여 중복 제거
function improvedSolution(numbers) {
    const temp = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }

    const answer = [...new Set(temp)];

    return answer.sort((a, b) => a - b);
}