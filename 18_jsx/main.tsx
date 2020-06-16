// https://reactjs.org/docs/introducing-jsx.html

import * as React from '/usr/local/lib/node_modules/react';

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}

const element = <h1>Hello, world!</h1>;
