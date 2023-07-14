"use strict"

// 비밀 지도 (프로그래머스)
function solution(n, arr1, arr2) {
    let answer = [];
    let map = Array.from(Array(n), () => new Array(n).fill(0));

    for(let i = 0; i < n; i++) {
        let tmp1 = arr1[i].toString(2);
        let tmp2 = arr2[i].toString(2);

        let str1 = "00000000" + tmp1;
        let str2 = "00000000" + tmp2;

        str1 = str1.slice(-n);
        str2 = str2.slice(-n);

        str1 = str1.split("").map((el) => parseInt(el));
        str2 = str2.split("").map((el) => parseInt(el));

        map[i] = map[i].map((el,idx) => str1[idx] + str2[idx]);
    }
    
    for (let i of map) {
        let result = "";

        for (let j of i) {
            if (j === 0) {
                result += " ";
            } else {
                result += "#";
            }
        }

        answer.push(result);
    }

    return answer;
}