module.exports =
`
    // foo.js
    import makeCounter from './counter.walt';

    makeCounter().then(wasmModule => {
        const {increment, decrement} = wasmModule.instance.exports;
        inc(); // 1
        dec(); // 0
    });

`;
