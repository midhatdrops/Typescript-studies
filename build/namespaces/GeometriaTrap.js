"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function Trapezio(base, altura) {
            return console.log((base * altura) / 2);
        }
        Area.Trapezio = Trapezio;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=GeometriaTrap.js.map