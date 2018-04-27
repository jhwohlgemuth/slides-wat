module.exports =
`
   const importWasm = function(url) {
     return fetch(url)
       .then(response => response.arrayBuffer())
       .then(bytes => WebAssembly.instantiate(bytes))
       .then(results => results.instance.exports);
   };
   
   importWasm('./main.min.wasm').then(api => {
     const {addOne} = api;
     console.log(addOne(9000)); // 9001
   });

`;
