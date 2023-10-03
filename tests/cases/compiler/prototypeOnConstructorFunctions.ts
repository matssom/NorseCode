interface I1 {
  konst: new (options?, element?) => any;
}

var i: I1;

i.const.prototype.prop = "yo";
