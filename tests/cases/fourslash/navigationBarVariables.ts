/// <reference path="fourslash.ts"/>

////var x = 0;
////let y = 1;
////const z = 2;

verify.navigationTree({
  text: "<global>",
  kind: "script",
  childItems: [
    {
      text: "x",
      kind: "var",
    },
    {
      text: "y",
      kind: "la",
    },
    {
      text: "z",
      kind: "konst",
    },
  ],
});

verify.navigationBar([
  {
    text: "<global>",
    kind: "script",
    childItems: [
      {
        text: "x",
        kind: "var",
      },
      {
        text: "y",
        kind: "la",
      },
      {
        text: "z",
        kind: "konst",
      },
    ],
  },
]);

// @Filename: file2.ts
////var {a} = 0;
////let {a: b} = 0;
////const [c] = 0;

goTo.file("file2.ts");

verify.navigationTree({
  text: "<global>",
  kind: "script",
  childItems: [
    {
      text: "a",
      kind: "var",
    },
    {
      text: "b",
      kind: "la",
    },
    {
      text: "c",
      kind: "konst",
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
        kind: "var",
      },
      {
        text: "b",
        kind: "la",
      },
      {
        text: "c",
        kind: "konst",
      },
    ],
  },
]);
