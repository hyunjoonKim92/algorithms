"use strict";

// 각도기 - 프로그래머스
function solution(angle) {
    switch(angle) {
        case 90:
            return 2;
            break;
        case 180:
            return 4;
            break;
        default:
            return angle > 0 && angle < 90 ? 1 : 3;
    }
}