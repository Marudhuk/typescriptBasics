export {}

let mesg="hi Welcome to TS";
console.log(mesg);
let a:any=123;
a=1;
a="hi";
let b:number=123;
let str:string="hi";
let bool:boolean=true;
let array=[1,2,3,4,'abc'];
let arrStr:string[]=["hi",'hello'];
let arr:Array<string>=[];
let multitype:number|string;
multitype=12;
multitype="hi";
let obj={
    name:"Muthu",
    age:12
};
// obj['age']="j";
// console.log(obj.gender);
function sum(a:number,b:number):number{
    return a+b;
}
function sub(a){
    return a.toLowerCase()
}
function sub2(a:string,b?:string){
    if(b) return a+b;
    return a
}
console.log(sub2("hi"));

function mul(a:string,b:string='raj'):string{
    if(b) return a+b;
    return a;
}
console.log(mul("hi"));

function object(point:{x:number,y:number}):number{
    return point.x+point.y
}
let p={
    x:20,
    y:3
}
console.log(object(p));

let student={}

interface Point{
    x:number;
    y:number;
    z?:number;
}
function object1(point:Point):number{
    return point.x;
}
console.log(object1(p));
