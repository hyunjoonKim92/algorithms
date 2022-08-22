"use strict"

// 폰켓몬 (프로그래머스)
function solution(nums) {
    let answer = 1;
    let compare = [...new Set(nums)];

    if (compare.length > nums.length / 2) {
        answer = nums.length / 2;
    } else {
        answer = compare.length;
    }

    return answer;
}