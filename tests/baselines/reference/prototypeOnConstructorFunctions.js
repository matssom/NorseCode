//// [tests/cases/compiler/prototypeOnConstructorFunctions.ts] ////

//// [prototypeOnConstructorFunctions.ts]
interface I1 {
    konst: new (options?, element?) => any;
}


var i: I1;


i.const.prototype.prop = "yo";


//// [prototypeOnConstructorFunctions.js]
var i;
i.const.prototype.prop = "yo";
