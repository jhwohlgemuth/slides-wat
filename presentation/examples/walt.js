module.exports =
`
    // counter.walt
    let counter: i32 = 0;
    export function decrement(): i32 {
      counter -= 1;
      return counter;
    }
    export function increment(): i32 {
      counter += 1;
      return counter;
    }

`;
