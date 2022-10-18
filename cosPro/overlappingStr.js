'use strict'

// 겹치는 문자열 합치기
function overlappingString(str1, str2) {
    let ans = "";
    let idx = 1;
    let len = 0;

    if (str1.length > str2.length) {
        len = str2.length;
    } else {
        len = str1.length;
    }

    for (let i = 0; i < len; i++, idx++) {
        if (str1.substring(str1.length - idx, str1.length) === str2.substring(0, idx)) {
            ans = str1.substring(0, str1.length - i - 1) + str2;
        }
    }

    idx = 1;

    for (let i = 0; i < len; i++, idx++) {
        if (str2.substring(str2.length - idx, str2.length) === str1.substring(0, idx)) {
            ans = str2.substring(0, str2.length - i - 1) + str1;
        }
    }

    return ans;
}

const str1 = 'ababc';
const str2 = 'abcdab';

console.log(overlappingString(str1, str2));