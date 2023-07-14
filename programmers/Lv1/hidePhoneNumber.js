"use strict"

// 핸드폰 번호 가리기 (프로그래머스)
function solution(phone_number) {
    let answer = '';
    let slice_number_for_star = '';
    let slice_nubmer_for_origin = phone_number.substr(phone_number.length - 4, phone_number.length);

    for (let i = 0, len = phone_number.slice(0, phone_number.length - 4).length; i < len; i++) {
        slice_number_for_star += "*";
    }

    answer = slice_number_for_star + slice_nubmer_for_origin;

    return answer;
}