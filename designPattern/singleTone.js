"use strict"

// 싱글톤 패턴
const singleTone = (function() {

    let instance;

    function init() {
        function privateMethod() {
            console.log("I am private");
        }

        let privateVariable = "I am also private";

        return {
            publicMethod: function() {
                console.log("public Mentod");
            },
            publicProperty: "public Property",
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

const first = singleTone.getInstance();
const second = singleTone.getInstance();

console.log(first === second);