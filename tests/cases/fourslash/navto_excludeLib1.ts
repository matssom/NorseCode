/// <reference path="fourslash.ts"/>

// @filename: /index.ts
//// import { weirdName as otherName } from "bar";
//// const [|weirdName: number = 1|];

// @filename: /tsconfig.json
//// {}

// @filename: /node_modules/bar/index.d.ts
//// export const [|weirdName: number|];

// @filename: /node_modules/bar/package.json
//// {}

const [weird, otherWeird] = test.ranges();

verify.navigateTo({
  pattern: "weirdName",
  expected: [
    {
      name: "weirdName",
      kind: "konst",
      kindModifiers: "export,declare",
      range: otherWeird,
      matchKind: "exact",
    },
    {
      name: "weirdName",
      kind: "konst",
      range: weird,
      matchKind: "exact",
    },
  ],
});

verify.navigateTo({
  pattern: "weirdName",
  excludeLibFiles: true,
  expected: [
    {
      name: "weirdName",
      kind: "konst",
      range: weird,
      matchKind: "exact",
    },
  ],
});
