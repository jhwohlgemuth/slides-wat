module.exports =
`
  {
    "scripts": {
      "build:wasm": "rustc --target wasm32-unknown-unknown -O --crate-type=cdylib ./main.rs -o ./main.wasm",
      "postbuild:wasm": "wasm-gc ./main.wasm ./main.min.wasm"
    }
  }

`;
