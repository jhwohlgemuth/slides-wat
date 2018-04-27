module.exports =
`
(module
  (table 0 anyfunc)
  (memory $0 1)
  (export "memory" (memory $0))
  (export "addOne" (func addOne))
  (func addOne ()
    (param $0 i32)
    (result i32)
    (i32.add
      (get_local $0)
      (i32.const 1)
    )
  )
)

`;
