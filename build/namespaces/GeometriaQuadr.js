"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function Quadrado(lado) {
            return console.log(Math.pow(lado, 2));
        }
        Area.Quadrado = Quadrado;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=GeometriaQuadr.js.map