
export { }

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

// class Engine{
//     constructor(public name:string,public horsePower:number){}
// }

// let e=new Engine("Audi",55);

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
