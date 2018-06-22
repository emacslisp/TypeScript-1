/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @noUnusedParameters: true

////import d from "foo";
////import d2, { used } from "foo";
////import { x } from "foo";
////import { x2, used } from "foo";
////used;
////
////function f(a, b) {
////    const x = 0;
////}
////function g(a, b, c) { return a; }
////f; g;
////
////interface I {
////    m(x: number): void;
////}
////
////class C implements I {
////    m(x: number): void {} // Does not remove 'x', which is inherited
////    n(x: number): void {}
////    private ["o"](): void {}
////}
////C;
////
////declare function takesCb(cb: (x: number, y: string) => void): void;
////takesCb((x, y) => {});
////takesCb((x, y) => { x; });
////takesCb((x, y) => { y; });
////
////{
////    let a, b;
////}
////for (let i = 0, j = 0; ;) {}
////for (const x of []) {}
////for (const y in {}) {}

verify.codeFixAll({
    fixId: "unusedIdentifier_delete",
    fixAllDescription: "Delete all unused declarations",
    newFileContent:
`import { used } from "foo";
import { used } from "foo";
used;

function f() {
}
function g(a) { return a; }
f; g;

interface I {
    m(x: number): void;
}

class C implements I {
    m(x: number): void {} // Does not remove 'x', which is inherited
    n(): void {}
}
C;

declare function takesCb(cb: (x: number, y: string) => void): void;
takesCb(() => {});
takesCb((x) => { x; });
takesCb((x, y) => { y; });

{
}
for (; ;) {}
for (const {} of []) {}
for (const {} in {}) {}`,
});
