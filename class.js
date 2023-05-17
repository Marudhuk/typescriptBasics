"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var classEngine_1 = require("./classEngine");
//class variable and methods
// class Car{
//     engine:string;
//     constructor(engine:string){
//         this.engine=engine;
//         console.log(this.engine);
//     }
//     start(){
//         return "started " + this.engine;
//     }
// }
// let c = new Car("Audi")
// console.log(c.start());
//method
// class Car1{
//     constructor(public engine:string) {
//         console.log(this.engine);
//     }
//     stop(){
//         return "stopped " + this.engine;
//     }
// }
// let c1 = new Car1("Benz")
// console.log(c1.stop());
//private variable
// class Car2{
//     private _engine:string;
//     constructor(engine:string){
//         this.engine=engine;
//         console.log(this._engine,'j');
//     }
//     get engine():string{
//         console.log("inside get");
//         return this._engine;
//     }
//     set engine(val:string){
//         console.log("inside settt");
//         if(val==undefined) throw "Give An engine"
//         this._engine=val;
//     }
//      getMyFunc(){
//         return this.engine;
//     }
// }
// let c2=new Car2("Maruti");
// // console.log(c2.engine="benz");
// // console.log(c2.getMyFunc());
// console.log(c2.engine);
// c2.engine="audi"
// console.log(c2.engine);
//Inheritance
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
        console.log(this.engine, "hhjjhj");
    }
    Auto.prototype.getHp = function () {
        return this.engine.horsePower;
    };
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(bool, engine) {
        var _this = _super.call(this, engine) || this;
        _this.bool = bool;
        console.log(_this.bool, _this.engine.horsePower);
        return _this;
    }
    return Truck;
}(Auto));
var e = new classEngine_1.Engine("Audi", 55);
var truc = new Truck(true, e);
console.log(truc.getHp());
// interface
// interface Action {
//     engine: string;
//     start(message: string, z:number):number;
// }
// class Car implements Action {
//     message:string;
//     engine: string;
//     constructor(engine: string) {
//         this.engine = engine;
//         console.log(this.engine);
//     }
//     start() {
//         return 9
//         // return 'message' + " " +this.engine;
//     }
// }
// let c = new Car("audi");
// console.log(c.start());
