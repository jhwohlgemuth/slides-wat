module.exports =
`
    # Install rustup
    curl https://sh.rustup.rs -sSf | sh -s -- -y

    # Source Cargo env
    . \${HOME}/.cargo/env

    # Use rustup to install Rust "nightly"
    rustup toolchain install nightly

    # Use rustup to add Wasm build target
    rustup target add wasm32-unknown-unknown --toolchain nightly

    # Install wasm-gc
    cargo install --git https://github.com/alexcrichton/wasm-gc

`;
