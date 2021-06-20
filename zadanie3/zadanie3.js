"use strict";
var adding = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Niepoprawne parametry");
};
console.log(adding(1, 3));
console.log(adding(1, 'asd'));
