"use strict";

/**
 * 모스부호(1)
 * @param {string} letter - 문자열
 * @returns {string}
 */
function solution(letter) {
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };

    return letter.split(' ').reduce((pre, cur) => pre + morse[cur], '');
}