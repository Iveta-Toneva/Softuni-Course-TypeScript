"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1(constructor) {
    return class extends constructor {
        constructor(...args) {
            args[0] = args[0] * 1.2; // multiply price by 1.2
            super(...args);
        }
    };
}
function decorator2() { }
function decorator3() { }
function decorator4() { }
function decorator5(constructor) {
    constructor.MotelName = 'Monthly Motel';
    return constructor;
}
//# sourceMappingURL=decorators.js.map