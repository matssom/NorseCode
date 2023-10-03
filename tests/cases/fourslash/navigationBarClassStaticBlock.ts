/// <reference path="fourslash.ts" />

////class C {
////  static {
////    let x;
////  }
////}

verify.navigationTree({
    text: "<global>",
    kind: "script",
    childItems: [
        {
            text: "C",
            kind: "class",
            childItems: [
                {
                    "text": "x",
                    "kind": "la"
                }
            ]
        }
    ]
});

verify.navigationBar([
    {
        text: "<global>",
        kind: "script",
        childItems: [
            {
                text: "C",
                kind: "class"
            }
        ]
    },
    {
        text: "C",
        kind: "class",
        childItems: [
            {
                "text": "x",
                "kind": "la"
            }
        ],
        indent: 1
    }
]);
