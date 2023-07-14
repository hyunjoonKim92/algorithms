"use strict"

// 2016년 (프로그래머스)
function solution(a, b) {
    const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date('2016-' + a + "-" + b);

    return weekDay[date.getDay()];
}