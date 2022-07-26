"use strict"

// 시저 암호 (프로그래머스)
function solution(s, n) {
    return s.split("").map(item => {
        if (item === " ") {
            return item;
        }

        const ascii = item.charCodeAt();

        return item.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(ascii + n - 26) : String.fromCharCode(ascii + n);
    }).join("");
}