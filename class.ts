
export { }
import { Engine } from "./classEngine"

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

// let myfuc=<T>(obj:T)=>{

//     return {...obj,greet:"hi"}
// }
// let a={
//     name:"Marudhu",
//     age:23
// }
// let b=myfuc(a)
// console.log(b.name);


// array

// let arr: Array<number> = [1, 2, 3, 5]
// console.log(arr);
// function arrFunc(arr: string) {
//     return "hi"
// }
// //Object can be updated/modified in four ways 
// // 1.Spread parameter
// // 2.Object.assign
// // 3.Json.stringify-->json.parse

// let numArray = [1, 23, 3]
// // numArray:number[] same can be written as a:Array<number>
// let strArray = ['a', 'b', 'c']
// // strArray:string[]

// let myFunction2 = (a: number) => {
//     // spread operator ...o
//     return a
// }
// // console.log(myFunction2(numArray));

// // let myFunction2=(a:number):number[]=>{
// //     // spread operator ...o
// //     return [a]
// // }
// let valArr = myFunction2(1)
// console.log('generic using array', valArr);
// // console.log(f.name); property does not exist
// console.log('----------------------------------')
// // array is implemented using generics

// interface abc<x, y> {
//     a: number;
//     b: number;
//     data: x;
//     data1: y;
// }

// let mulArr: number[] | string[]
// mulArr = []

// function using generics

// let myfun = <T, J, Z>(a: T, b: J, c: Z) => {

//     return a  b + c;

// }
// console.log(myfun('Ragul', 2000, false));

// // interface
// interface abc<X, Y> {
//     a: number;

//     b: number;

//     date1: X;

//     dob: Y;
// }

// class Iclass<X, Y> implements abc<X, Y> {
//     constructor(public a: number, public b: number, public date1: X, public dob: Y) {
//     }
// }
// let data = new Iclass<string,boolean>(2, 4, '20/12/2001', true)
// console.log(data);






