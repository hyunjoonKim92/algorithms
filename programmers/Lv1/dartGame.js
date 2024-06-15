"use strict"

// 다트 게임 - 프로그래머스
// 테스트 케이스 일부 통과 실패
function solution(dartResult) {
    let answer = 0;
    let score = [];
    let bonus = [];
    let option = [];
    let optionIdx = [];
    let regExp = /[*#]/g;

    let chance = [];

    dartResult.split("").forEach((item, index) => {
         if (!isNaN(Number(item))) {
             score.push(Number(item));
         } else {
             if (!regExp.test(item)) {
                 bonus.push(item);
             } else {
                 option.push(item);
                 optionIdx.push(index);
             }
         }
    });

    for (let i = 0, len = 3; i < len; i++) {
        if (bonus[i] === "S") {
            sqrt = Math.pow(score[i], 1);
        } else if (bonus[i] === "D") {
            sqrt = Math.pow(score[i], 2);
        } else {
            sqrt = Math.pow(score[i], 3);
        }
    
        chance.push(sqrt);
    }
    
    if (option.length > 0) {
        if (option.length !== 2) {
            if (optionIdx[0] === 2) {
                if (option[0] === "*") {
                    chance[0] = chance[0] * 2;
                } else {
                    chance[0] = chance[0] * (-1);
                }
            } else if (optionIdx[0] === 4) {
                if (option[0] === "*") {
                    chance[0] = chance[0] * 2;
                    chance[1] = chance[1] * 2;
                } else {
                    chance[1] = chance[1] * (-1);
                }
            } else {
                if (option[0] === "*") {
                    chance[1] = chance[1] * 2;
                    chance[2] = chance[2] * 2;      
                } else {
                    chance[2] = chance[2] * (-1);
                }
            }
        } else {
            for (let j = 0; j < option.length; j++) {
                if (optionIdx[j] === 2) {
                    if (option[j] === "*") {
                        chance[0] = chance[0] * 2;
                    } else {
                        chance[0] = chance[0] * (-1);
                    }
                } else if (optionIdx === 4) {
                    if (option[j] === "*") {
                        chance[0] = chance[0] * 2;
                        chance[1] = chance[1] * 2;
                    } else {
                        chance[1] = chance[1] * (-1);
                    }
                } else {
                    if (option[j] === "*") {
                        chance[1] = chance[1] * 2;
                        chance[2] = chance[2] * 2;
                    } else {
                        chance[2] = chance[2] * (-1);
                    }
                }
            }   
        }
    }

    chance.forEach(item => {
        answer += item;
    });

    return answer;
}

// improved func 1
function improvedSolution1(dartResult) {
    let score = 0;
    let cnt = [];

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
          score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
        } else if (dartResult[i] === "S") {
            cnt.push(score);
        } else if (dartResult[i] === "D") {
            cnt.push(Math.pow(score, 2));
        } else if (dartResult[i] === "T") {
            cnt.push(Math.pow(score, 3));
        } else if (dartResult[i] === "*") {
            cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
            cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
        } else if (dartResult[i] === "#") {
            cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
        }
    }

    return cnt.reduce((acc, cur) => acc + cur, 0);
}

// improved func 2
function improvedSolution2(dartResult) {
    let num = 0;
    let answer = [];
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = dartResult[i];
            }
        } else if(dartResult[i] === 'S') {
            answer.push(temp);
        } else if(dartResult[i] === 'D') {
            answer.push(Math.pow(temp, 2));
        } else if(dartResult[i] === 'T'){
            answer.push(Math.pow(temp, 3));
        } else if(dartResult[i] == '#') {
            answer[answer.length - 1] *= -1;
        } else if(dartResult[i] == '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }
    }

    for (let i = 0; i < answer.length; i++) {
        num += Number(answer[i]);
    }

    return num;
}