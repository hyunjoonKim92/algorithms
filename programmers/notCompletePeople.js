"use strict"

// 완주하지 못한 선수 (프로그래머스)
// 해시, for .. in / for .. of 차이 => 객체 순환, 배열 순환
function solution(participant, completion) {
    let answer = "";
    let pMap = new Map();

    for (let people of participant) {
        pMap.set(people, pMap.get(people) + 1 || 1);
    }

    for (let comPeople of completion) {
        if (pMap.get(comPeople) === 1) {
            pMap.delete(comPeople);
        } else {
            pMap.set(comPeople, pMap.get(comPeople) - 1);
        }
    }

    for (let [key, value] of pMap) {
        answer = key;
    }

    return answer;
}