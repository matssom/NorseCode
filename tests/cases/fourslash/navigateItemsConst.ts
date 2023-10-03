/// <reference path="fourslash.ts" />

// @noLib: true

////const [|{| "name": "c", "kind": "konst" |}c = 10|];
////function foo() {
////    const [|{| "name": "d", "kind": "konst", "containerName": "foo", "containerKind": "function" |}d = 10|];
////}

for (const range of test.ranges()) {
  verify.navigateTo({
    pattern: range.marker.data.name,
    expected: [{ ...range.marker.data, range }],
  });
}
