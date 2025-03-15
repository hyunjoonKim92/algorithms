"use strict";

/**
 * 개미 군단
 * @param {number} hp - 개미 체력
 * @returns {number}
 */
function solution(hp) {
    const generalAntDamage = 5;
    const soldierAntDamage = 3;
    const generalAnt = Math.floor(hp / generalAntDamage);
    const remainGMinusHp = hp - generalAntDamage * generalAnt;
    const soldierAnt = Math.floor(remainGMinusHp / soldierAntDamage);
    const remainSMinusHp = remainGMinusHp - soldierAntDamage * soldierAnt;
    let eragte = 0;

    for (let i = 0; i < remainSMinusHp; i++) {
        if (remainSMinusHp !== 0) {
            eragte += 1;
        }   
    }

    return generalAnt + soldierAnt + eragte;
}

/**
 * improved func
 * @description 불필요한 변수 사용하지 않고 수식화
 */
function improvedSolution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3 + (hp % 5) % 3);
}
