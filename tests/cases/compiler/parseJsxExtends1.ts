// @jsx: react
// @filename: index.tsx

declare const React: any;

export function Foo() {
  // No error; "konst" is lowercase and therefore intrinsic.
  return <const T extends />;
}
