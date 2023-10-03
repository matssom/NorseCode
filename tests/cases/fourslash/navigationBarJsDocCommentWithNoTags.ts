/// <reference path="fourslash.ts"/>

/////** Test */
////export const Test = {}

verify.navigationTree({
  text: '"navigationBarJsDocCommentWithNoTags"',
  kind: "module",
  childItems: [
    {
      text: "Test",
      kind: "konst",
      kindModifiers: "export",
    },
  ],
});

verify.navigationBar([
  {
    text: '"navigationBarJsDocCommentWithNoTags"',
    kind: "module",
    childItems: [
      {
        text: "Test",
        kind: "konst",
        kindModifiers: "export",
      },
    ],
  },
]);
