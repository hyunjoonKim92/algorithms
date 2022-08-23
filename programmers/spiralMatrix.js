"use strict"

const test1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // [1, 2, 3, 6, 9, 8, 7, 4, 5]
const test2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]; // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

// 나선형 매트릭스
function spiralMatrix(matrix) {
    const result = [];

    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while (left <= right && top <= bottom) {
        // 1번쨰 순회 (leftTop -> rightTop)
        for (let i = left, len = right; i <= len; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // 2번째 순회 (rightTop -> rightBottom)
        for (let i = top, len = bottom; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // 3번째 순회 (rightBottom -> leftBottom)
        if (top <= bottom) {
            for (let i = right, len = left; i >= len; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // 4번쨰 순회 (leftBottom -> leftTop)
        if (left <= right) {
            for (let i = bottom, len = top; i >= len; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

console.log(spiralMatrix(test1));
console.log(spiralMatrix(test2));