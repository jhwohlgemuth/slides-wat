module.exports =
`
    wasm-function[0]:
    sub rsp, 8
    mov ecx, edi
    mov eax, ecx
    add eax, 1
    nop
    add rsp, 8
    ret
    
`;
