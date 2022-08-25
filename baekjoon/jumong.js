"use strict"

// 주몽 (백준)
function jumong(n, m, numsArr) {
    let count = 0;
    let startPointer = 0;
    let endPointer = n - 1;

    numsArr.sort((a, b) => a - b);

    while (startPointer < endPointer) {
        if (numsArr[startPointer] + numsArr[endPointer] > m) {
            endPointer--;
        } else if (numsArr[startPointer] + numsArr[endPointer] < m) {
            startPointer++;
        } else { 
            count++;
            startPointer++;
            endPointer--;
        }
    }

    return count;
}

console.log(jumong(6, 9, [2, 7, 4, 1, 5, 3]));