/// <reference path="fourslash.ts" />

// @noLib: true

////let [|c = 10|];
////function foo() {
////    let [|d = 10|];
////}

const [r0, r1] = test.ranges();
verify.navigateTo(
    { pattern: "c", expected: [{ name: "c", kind: "la", range: r0 }] },
    { pattern: "d", expected: [{ name: "d", kind: "la", range: r1, containerName: "foo", containerKind: "function" }] },
);
