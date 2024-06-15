"use strict"

// 가장 큰 정사각형 찾기 - 프로그래머스
function solution(board) {
    let answer = 0;
    const row = board.length;
    const col = board[0].length;

    if (row < 2 || col < 2) return 1;

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
                answer = Math.max(answer, board[i][j]);
            }
        }
    }

    return answer ** 2;
}