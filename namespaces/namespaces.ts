// namespace Geometria {
//   export namespace Areas {
//     const Pi = 3.14;
//     export function Circunferencia(raio: number): void {
//       return console.log(Pi * Math.pow(raio, 2));
//     }

//     export function Retangulo(base: number, altura: number): void {
//       return console.log(base * altura);
//     }
//   }
// }

// const Pi = 2.9 // essa const está fora do escopo do Namespace, que se comporta como escopo de função.

///<reference path="GeometriaCirc.ts"/>
///<reference path="GeometriaRet.ts"/>
///<reference path="GeometriaQuadr.ts"/>
///<reference path="GeometriaTrap.ts"/>

Geometria.Area.Circunferencia(10);
Geometria.Area.Retangulo(10, 20);
Geometria.Area.Quadrado(5);
Geometria.Area.Trapezio(10, 20);
