let id: number = 5;
let company: string='Code Tamizha Code';
let isCompanyOpen: boolean= true;

let x:any;
x='asdfvwe';
let ids: number[]=[1,2,3,4,5,6]
let x1: any[]=[1,'d',true]

let employee: [number,string,true]=[1,'Iyyappan',true]
//Tuple array
let employees:[number, string,boolean][]=[
    [1,"Jeron",true],
    [2,"Dhoni",true],
    [3,"Praveen",false]
]

//union
let eid:string | number;
eid = 5
eid = 'roll1' 

//enum
enum  direction1
{
    up = 5,
    down,
    left,
    right
}
enum  direction2
{
    up = 'up',
    down='down',
    left='left',
    right='right'
}
console.log(direction1.left)

//object
type UserType=
{
    id:number,
    name:string
}
let User: UserType=
{
    id:1,
    name:'Iyyappan'
}

//type assert
let x3: any =5
//let compId=x3 as number;
let compId=<number>x3;

//function

function doMath(a:number,b: number):number{
    return a+b
}

console.log(doMath(1,5))

function logme(x: string): void
{
    console.log(x)
}
 console.log('Hi')

function logme1(x: string|number):void
{
    if(typeof x=='number')console.log("Hi Number")
    if(typeof x=='string')console.log("Hi String")
}

//interface
//type eid1=number | string
interface UserType1
{
    id:number,
    name:string
    age?:number
}
let User1: UserType1=
{
    id:1,
    name:'Iyyappan'
}

//User1.id = 5

interface MathFunc
{
    (x:number, y:number):number 
}

const add: MathFunc = (x:number, y:number) =>x+y
const sub: MathFunc = (x:number, y:number) =>x-y