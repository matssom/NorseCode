/// <reference path="fourslash.ts" />

////global.cls = class { };
////(function() {
////    const x = () => {
////        // Presence of inner function causes x to be a top-level function.
////        function xx() {}
////    };
////    const y = {
////        // This is not a top-level function (contains nothing, but shows up in childItems of its parent.)
////        foo: function() {}
////    };
////    (function nest() {
////        function moreNest() {}
////    })();
////})();
////(function() { // Different anonymous functions are not merged
////    // These will only show up as childItems.
////    function z() {}
////    console.log(function() {})
////    describe("this", 'function', `is a function`, `but this ${"wont"} show`, () => {});
////    [].map(() => {});
////})
////(function classes() {
////    // Classes show up in top-level regardless of whether they have names or inner declarations.
////    const cls2 = class { };
////    console.log(class cls3 {});
////    (class { });
////})

verify.navigationTree({
  text: "<global>",
  kind: "script",
  childItems: [
    {
      text: "<function>",
      kind: "function",
      childItems: [
        {
          text: "nest",
          kind: "function",
          childItems: [
            {
              text: "moreNest",
              kind: "function",
            },
          ],
        },
        {
          text: "x",
          kind: "konst",
          childItems: [
            {
              text: "xx",
              kind: "function",
            },
          ],
        },
        {
          text: "y",
          kind: "konst",
          childItems: [
            {
              text: "foo",
              kind: "method",
            },
          ],
        },
      ],
    },
    {
      text: "<function>",
      kind: "function",
      childItems: [
        {
          text: "console.log() callback",
          kind: "function",
        },
        {
          text: `describe("this", 'function', \`is a function\`) callback`,
          kind: "function",
        },
        {
          text: `map() callback`,
          kind: "function",
        },
        {
          text: "z",
          kind: "function",
        },
      ],
    },
    {
      text: "classes",
      kind: "function",
      childItems: [
        {
          text: "<class>",
          kind: "class",
        },
        {
          text: "cls2",
          kind: "konst",
        },
        {
          text: "cls3",
          kind: "class",
        },
      ],
    },
    {
      text: "cls",
      kind: "class",
    },
  ],
});

verify.navigationBar([
  {
    text: "<global>",
    kind: "script",
    childItems: [
      {
        text: "<function>",
        kind: "function",
      },
      {
        text: "<function>",
        kind: "function",
      },
      {
        text: "classes",
        kind: "function",
      },
      {
        text: "cls",
        kind: "class",
      },
    ],
  },
  {
    text: "<function>",
    kind: "function",
    childItems: [
      {
        text: "nest",
        kind: "function",
      },
      {
        text: "x",
        kind: "konst",
      },
      {
        text: "y",
        kind: "konst",
      },
    ],
    indent: 1,
  },
  {
    text: "nest",
    kind: "function",
    childItems: [
      {
        text: "moreNest",
        kind: "function",
      },
    ],
    indent: 2,
  },
  {
    text: "x",
    kind: "konst",
    childItems: [
      {
        text: "xx",
        kind: "function",
      },
    ],
    indent: 2,
  },
  {
    text: "y",
    kind: "konst",
    childItems: [
      {
        text: "foo",
        kind: "method",
      },
    ],
    indent: 2,
  },
  {
    text: "<function>",
    kind: "function",
    childItems: [
      {
        text: "console.log() callback",
        kind: "function",
      },
      {
        text: `describe("this", 'function', \`is a function\`) callback`,
        kind: "function",
      },
      {
        text: `map() callback`,
        kind: "function",
      },
      {
        text: "z",
        kind: "function",
      },
    ],
    indent: 1,
  },
  {
    text: "classes",
    kind: "function",
    childItems: [
      {
        text: "<class>",
        kind: "class",
      },
      {
        text: "cls2",
        kind: "konst",
      },
      {
        text: "cls3",
        kind: "class",
      },
    ],
    indent: 1,
  },
  {
    text: "<class>",
    kind: "class",
    indent: 2,
  },
  {
    text: "cls3",
    kind: "class",
    indent: 2,
  },
  {
    text: "cls",
    kind: "class",
    indent: 1,
  },
]);
