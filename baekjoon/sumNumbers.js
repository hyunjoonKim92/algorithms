"use strict"

// 자연수 n 이 주어졌을 때, n 이하의 연속된 자연수의 합이 n 일 경우의 수를 구하는 문제
// 15 => 15, 7 + 8, 4 + 5 + 6, 1 + 2 + 3 + 4 + 5
// 10 => 10, 1 + 2 + 3 + 4

// 수들의 합 5 (백준)
function sumNumbers(n) {
    let result = 1; // 경우의 수
    let startPointer = 1; // 앞쪽에 사용할 포인터
    let endPointer = 1; // 뒤쪽에 사용할 포인터
    let sum = 1; // 누적 합

    while (endPointer !== n) {
        // 누적 합이 입력받은 숫자보다 클 경우 sum = sum - startPointer
        if (sum > n) { 
            sum -= startPointer;
            startPointer++;

        // 누적 합이 입력받은 숫자보다 작을 경우 endPointer 증가 후 sum = sum + endPointer
        } else if (sum < n) { 
            endPointer++;
            sum += endPointer;

            // 누적 합이 입력받은 숫자와 일치할 경우 (경우의 수 충족) endPointer 증가 후 sum = sum + endPointer 후 반복문 루프
        } else {
            result++;
            endPointer++;
            sum += endPointer;
        }
    }

    return result;
}

console.log(sumNumbers(15));
console.log(sumNumbers(10));
