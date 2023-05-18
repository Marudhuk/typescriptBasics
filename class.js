"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
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
// class Auto{
//     engine:Engine;
//     constructor(engine:Engine) {
//         this.engine=engine
//         console.log(this.engine,"hhjjhj");
//     }
//     getHp(){
//         return this.engine.horsePower
//     }
// }
// class Truck extends Auto{
//     constructor(public bool:boolean,engine:Engine){
//         super(engine)
//         console.log(this.bool,this.engine.horsePower);
//     }
// }
// let e=new Engine("Audi",55);
// let truc=new Truck(true,e)
// console.log(truc.getHp());
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
//enum 
// enum Department{
//     mech, It , Cse
// }
// console.log(Department.mech);
//genrics and spread operator
var myfuc = function (obj) {
    return __assign(__assign({}, obj), { greet: "hi" });
};
var a = {
    name: "Marudhu",
    age: 23
};
var b = myfuc(a);
console.log(b.name);
