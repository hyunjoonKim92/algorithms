"use strict"

// 로또의 최고 순위와 최저 순위 - 프로그래머스
function solution(lottos, win_nums) {    
  const zeroLen = lottos.filter(num => num === 0).length;
  const matchLen = [...new Set(lottos.filter(el => win_nums.includes(el)))].length;
  const min = chkNums(matchLen);
  const max = chkNums(matchLen + zeroLen);

  return [max, min];
}

function chkNums(cnt) {
  switch(cnt) {
      case 6:
          return 1;
          break;
      case 5:
          return 2;
          break;
      case 4:
          return 3;
          break;
      case 3:
          return 4;
          break;
      case 2:
          return 5;
          break;
      default:
          return 6;
          break;
  }
}