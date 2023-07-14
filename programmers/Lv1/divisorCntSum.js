"use strict"

// 약수의 개수와 덧셈 (프로그래머스)
function solution(left, right) {
    var answer = 0;
    let numbers = [];

    for (let i = left; i <= right; i++) {
        numbers.push(i);
    }

    numbers.forEach(item => {
        let idx = 1;
        let cnt = 0;

        while (idx <= item) {
            if (item % idx === 0) {
                cnt += 1;
            }

            idx++;
        }

        if (cnt % 2 === 0) {
            answer += item;
        } else {
            answer -= item;
        }
    });

    return answer;
}

// improved fun
function improvedSolution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
      let count = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }

        if (count % 2) {
            answer -= i;
        } else {
            answer += i;
        }
    }

    return answer;
}