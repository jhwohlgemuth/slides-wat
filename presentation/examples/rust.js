module.exports =
`
    #![allow(non_snake_case)]

    #[no_mangle]
    pub extern "C" fn addOne(x: i32) -> i32 {
        x + 1
    }

`;
