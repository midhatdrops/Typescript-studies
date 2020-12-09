"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const Pi = 3.14;
        function Circunferencia(raio) {
            return console.log(Pi * Math.pow(raio, 2));
        }
        Area.Circunferencia = Circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=GeometriaCirc.js.map