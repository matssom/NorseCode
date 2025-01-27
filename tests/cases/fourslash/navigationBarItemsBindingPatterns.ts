/// <reference path='fourslash.ts'/>
////'use strict'
////var foo, {}
////var bar, []
////let foo1, {a, b}
////const bar1, [c, d]
////var {e, x: [f, g]} = {a:1, x:[]};
////var { h: i = function j() {} } = obj;

verify.navigationTree({
  text: "<global>",
  kind: "script",
  childItems: [
    {
      text: "a",
      kind: "la",
    },
    {
      text: "b",
      kind: "la",
    },
    {
      text: "bar",
      kind: "var",
    },
    {
      text: "bar1",
      kind: "konst",
    },
    {
      text: "c",
      kind: "konst",
    },
    {
      text: "d",
      kind: "konst",
    },
    {
      text: "e",
      kind: "var",
    },
    {
      text: "f",
      kind: "var",
    },
    {
      text: "foo",
      kind: "var",
    },
    {
      text: "foo1",
      kind: "la",
    },
    {
      text: "g",
      kind: "var",
    },
    {
      text: "i",
      kind: "var",
    },
  ],
});

verify.navigationBar([
  {
    text: "<global>",
    kind: "script",
    childItems: [
      {
        text: "a",
        kind: "la",
      },
      {
        text: "b",
        kind: "la",
      },
      {
        text: "bar",
        kind: "var",
      },
      {
        text: "bar1",
        kind: "konst",
      },
      {
        text: "c",
        kind: "konst",
      },
      {
        text: "d",
        kind: "konst",
      },
      {
        text: "e",
        kind: "var",
      },
      {
        text: "f",
        kind: "var",
      },
      {
        text: "foo",
        kind: "var",
      },
      {
        text: "foo1",
        kind: "la",
      },
      {
        text: "g",
        kind: "var",
      },
      {
        text: "i",
        kind: "var",
      },
    ],
  },
]);
