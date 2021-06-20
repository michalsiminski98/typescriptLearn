var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        var _this = this;
        this.getX = function () {
            return _this.x;
        };
        this.getY = function () {
            return _this.y;
        };
        this.x = x;
        this.y = y;
    }
    Point2D.distanceBetween = function (point1, point2) {
        var xDiff = point2.getX() - point1.getX();
        var yDiff = point2.getY() - point1.getY();
        var dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        return dist;
    };
    return Point2D;
}());
var p1 = new Point2D(2, 2);
var p2 = new Point2D(2, 3);
console.log(Point2D.distanceBetween(p1, p2));
