/// <reference path="fourslash.ts" />

// @allowJs: true

// @Filename: /a.js
////exports.a = exports.b = exports.c = 0;

verify.navigationTree({
  text: "<global>",
  kind: "script",
  childItems: [
    {
      text: "a",
      kind: "konst",
      childItems: [
        {
          text: "b",
          kind: "konst",
          childItems: [{ text: "c", kind: "konst" }],
        },
      ],
    },
  ],
});

verify.navigationBar([
  {
    text: "<global>",
    kind: "script",
    childItems: [{ text: "a", kind: "konst" }],
  },
  {
    text: "a",
    kind: "konst",
    childItems: [{ text: "b", kind: "konst" }],
    indent: 1,
  },
  {
    text: "b",
    kind: "konst",
    childItems: [{ text: "c", kind: "konst" }],
    indent: 2,
  },
]);
