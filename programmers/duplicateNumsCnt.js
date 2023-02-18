"use strict"

// 중복된 숫자 갯수 (프로그래머스)
function solution(array, n) {
  return array.filter(x => x == n).length;
}