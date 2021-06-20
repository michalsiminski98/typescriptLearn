"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unit = /** @class */ (function () {
    function Unit(name, hitPoints, moveDistance, weapons) {
        this.name = name;
        this.hitPointsLeft = hitPoints;
        this.maxHitPoints = hitPoints;
        this.moveDistance = moveDistance;
        this.weapons = weapons;
    }
    return Unit;
}());
exports.default = Unit;
