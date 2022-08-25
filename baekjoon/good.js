"use strict"

let numsArr;

// 좋다 (백준)
function good(n, arr) {
    let count = 0;

    arr.sort((a, b) => a - b);

    numsArr = arr;

    for (let i = 0; i < numsArr.length; i++) {
        if (goodNum(i, 0, n - 1)) count++;
    }

    return count;
}

function goodNum(idx, startPointer, endPointer) {
    let sum = 0;

    while(startPointer < endPointer) {
        if (startPointer === idx) {
            startPointer++;
        }
        if (endPointer === idx) {
            endPointer--;
        }
        if (startPointer >= endPointer) {
            return false;
        }

        sum = numsArr[startPointer] + numsArr[endPointer];

        if (sum < numsArr[idx]) {
            startPointer++;
        } else {
            endPointer--;
        }

        if (sum === numsArr[idx]) {
            return true;
        }
    }

    return false;
}

console.log(good(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));