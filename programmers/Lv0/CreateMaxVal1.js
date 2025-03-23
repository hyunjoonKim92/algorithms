/**
 * 최댓값 만들기 (1)
 * @param {number} numbers - 정수 배열
 * @returns {number}
 */
function solution(numbers) {
    const sortArr = [...numbers].sort((a, b) => b - a);
    return sortArr[0] * sortArr[1];
}
