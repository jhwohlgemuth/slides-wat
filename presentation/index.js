import React from 'react';
import {Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link, List, ListItem, Quote, S, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import cpp from './examples/cpp';
import wat from './examples/wat';
import assembly from './examples/assembly';
import installRust from './examples/install_rust';
import rust from './examples/rust';
import useRust from './examples/use_rust';
import pkg from './examples/package';
import walt from './examples/walt';
import installWalt from './examples/install_walt';
import useWalt from './examples/use_walt';

require('normalize.css');
require('prismjs/themes/prism-solarizedlight.css');

const preload = images => {
    images.forEach(src => {
        const image = new Image();
        image.src = src;
    });
};

const caniuse = require('../assets/caniuse-webassembly.png');
const checkMyMath = require('../assets/check-my-math.gif');
const crabArmy = require('../assets/crab-army.gif');
const heart = require('../assets/heart.png');
const jsLogo = require('../assets/js.png');
const legion = require('../assets/legion.gif');
const lowLevel = require('../assets/low-level.png');
const no = require('../assets/no-no-no.gif');
const perfGraph = require('../assets/perf-graph.png');
const rustLogo = require('../assets/rust.png');
const waltLogo = require('../assets/walt.png');
const wasmLogo = require('../assets/wasm.png');
const yuno = require('../assets/y-u-no.jpg');

preload([
    caniuse,
    checkMyMath,
    crabArmy,
    heart,
    jsLogo,
    legion,
    lowLevel,
    no,
    perfGraph,
    rustLogo,
    waltLogo,
    wasmLogo,
    yuno
]);

import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-lisp';
import 'prismjs/components/prism-asm6502';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-rust';

const theme = createTheme({
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica'
});

class Title extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="primary">
                <Heading fit caps lineHeight={1} textColor="secondary">
                wat?
                </Heading>
                <Text margin="10px 0 0" textColor="tertiary" fit bold>
                The purpose and promise of WebAssembly
                </Text>
            </Slide>
        );
    }
}

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['slide']} transitionDuration={200} theme={theme}>
                <Title />
                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Quote>
                            WebAssembly is a stack-based, bytecode language.
                        </Quote>
                        <Cite>Conrad Watt, "Mechanising and Verifying theWebAssembly Specification" (2017)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Quote>
                            ...WebAssembly is an abstraction over modern hardware, making it language-, hardware-, and platform-independent...
                        </Quote>
                        <Cite>"Bringing the Web up to Speed with WebAssembly" (2017)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Text>
                        WebAssembly (abbreviated Wasm*) is a
                        <S type="bold" textColor="green"> safe </S>,
                        <S type="bold" textColor="royalblue"> portable </S>,
                        <S type="bold" textColor="rebeccapurple"> low-level </S>
                        <S type="bold" textColor="orange"> code format </S>
                        designed for efficient execution and compact representation.
                    </Text>
                    <Text textColor="#777" fit>* A contraction of “WebAssembly”, not an acronym, hence not using all-cap</Text>
                </Slide>
                <Slide>
                    <Heading textColor="green">safe</Heading>
                    <Text>Code is validated and executes in a memory-safe*, sandboxed environment preventing data corruption or security breaches.</Text>
                    <Text textColor="#777" fit>* No program can break WebAssembly’s memory model</Text>
                </Slide>
                <Slide>
                    <Heading textColor="green">... and sound</Heading>
                    <Text>The type system of WebAssembly is sound, implying both type safety and memory safety with respect to the WebAssembly semantics*</Text>
                    <Text textColor="#777" fit>* Both soundness properties (preservation and progress) have been proved using math! (and <Link href="https://isabelle.in.tum.de/">Isabelle</Link>)</Text>
                </Slide>
                <Slide bgColor="secondary">
                    <BlockQuote fit>
                        <Quote fit>
                            At worst, a buggy or exploited WebAssembly program can make a mess of the data in its own memory.
                        </Quote>
                        <Cite>"Bringing the Web up to Speed with WebAssembly" (2017)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Quote>
                            ...This means that even untrusted modules can be safely executed in the same address space as other code
                        </Quote>
                        <Cite>Bringing the Web up to Speed with WebAssembly (2017)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgImage={checkMyMath}></Slide>
                <Slide>
                    <Heading textColor="royalblue">portable</Heading>
                    <Text>Makes no architectural assumptions that are not broadly supported across modern hardware</Text>
                </Slide>
                <Slide>
                    <Heading textColor="rebeccapurple">low-level</Heading>
                    <Text>As in, it has a "low level of abstraction"</Text>
                    <Text>(the "Assembly" in WebAssembly)</Text>
                </Slide>
                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Quote>
                            Functions are not first class and cannot be nested within each other.
                        </Quote>
                        <Cite>"Bringing the Web up to Speed with WebAssembly" (2017)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Heading textColor="orange">code format</Heading>
                    <Text>
                        WebAssembly has a binary format* and a text format**
                    </Text>
                    <Text textColor="#777" fit>* specified as a binary encoding of a module's structure and code</Text>
                    <Text textColor="#777" fit>** specified as a textual projection of a module's structure and code</Text>
                </Slide>
                <Slide>
                    <Heading size={2}>...wat?</Heading>
                </Slide>
                <Slide>
                    <Heading>That's right!</Heading>
                    <Text padding="0 0 20px 0" fit>The file extension for Wasm's text format is <S type="bold">.wat</S></Text>
                </Slide>
                <Slide>
                    <Layout>
                        <Fill>
                            <Text>C++</Text>
                            <CodePane
                                padding="10px"
                                lang="cpp"
                                source={cpp}
                            ></CodePane>
                        </Fill>
                        <Fill>
                            <Text>Wasm (wat)</Text>
                            <CodePane
                                padding="10px"
                                lang="lisp"
                                source={wat}
                            ></CodePane>
                        </Fill>
                        <Fill>
                            <Text>Assembly</Text>
                            <CodePane
                                padding="10px"
                                lang="asm6502"
                                source={assembly}
                            ></CodePane>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Quote>WebAssembly is a way of taking code written in programming languages other than JavaScript and running that code in the browser</Quote>
                        <Cite>Lin Clark (2017)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Image src={lowLevel}/>
                </Slide>
                {/* FAQs */}
                <Slide bgColor="#08415c">
                    <Quote>Is WebAssembly trying to replace JavaScript?</Quote>
                </Slide>
                <Slide bgImage={no}></Slide>
                <Slide>
                    <Heading size={4}>Exhibit #1</Heading>
                    <Image src={caniuse}/>
                </Slide>
                <Slide>
                    <Heading size={4}>Exhibit #2</Heading>
                    <Text>A Wasm module must be instantiated before it can be used...</Text>
                    <Appear>
                        <Text>... and JavaScript does the instantiating.</Text>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={4}>Exhibit #3</Heading>
                    <Link href="https://github.com/WebAssembly/design/blob/master/FAQ.md#is-webassembly-trying-to-replace-javascript">
                        WebAssembly Design FAQ — Is WebAssembly trying to replace JavaScript?
                    </Link>
                </Slide>
                <Slide>
                    <Heading size={4}>Exhibit #4</Heading>
                    <Layout>
                        <Fill><Image padding="10px" src={wasmLogo} height={250}/></Fill>
                        <Fill><Image padding="10px" src={heart} height={250}/></Fill>
                        <Fill><Image padding="10px" src={jsLogo} height={250}/></Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading textColor="#08415c">Y U NO JVM?</Heading>
                    <Image src={yuno} height={500}/>
                </Slide>
                <Slide>
                    <Text>
                        ...the JVM ... allow[s] bytecode to <S type="bold" style={{color: 'red'}}>create irreducible loops and unbalanced locking structures</S>,
                        features which usually cause optimizing JITs to give up and relegate methods containing those
                        constructs  to  an  interpreter.
                    </Text>
                    <br/>
                    <Text>
                        In  contrast,  the  structured  control flow of <S type="bold" style={{color: 'green'}}>WebAssembly
                        makes validation and compilation fast and simple</S>...
                    </Text>
                </Slide>
                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Quote>
                            Java bytecode does not share WebAssembly’s approach to
                            control flow, and ... comparisons we can make to their model are limited.
                        </Quote>
                        <Cite>Conrad Watt, "Mechanising and Verifying theWebAssembly Specification" (2017)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="#08415c">
                    <Quote>What are WebAssembly's use cases?</Quote>
                </Slide>
                <Slide bgImage={legion}></Slide>
                <Slide>
                    <Heading fit>A few of my favorites</Heading>
                    <List>
                        <Appear><ListItem>
                            Games (like
                            <Link padding="0 0 0 10px" style={{textDecoration: 'underline'}} textColor="hotpink" href="http://webassembly.org/demo/Tanks/">tanks</Link> or
                            <Link padding="0 0 0 10px" style={{textDecoration: 'underline'}} textColor="hotpink" href="https://s3.amazonaws.com/mozilla-games/ZenGarden/EpicZenGarden.html">Epic Zen Garden</Link>
                            )
                        </ListItem></Appear>
                        <Appear><ListItem>
                            Encryption (like
                            <Link padding="0 0 0 10px" style={{textDecoration: 'underline'}} textColor="hotpink" href="https://github.com/mafintosh/blake2b-wasm/blob/master/blake2b.wat">Blake2b</Link> or
                            <Link padding="0 0 0 10px" style={{textDecoration: 'underline'}} textColor="hotpink" href="http://antelle.net/argon2-browser/">Argon2</Link>
                            )
                        </ListItem></Appear>
                        <Appear><ListItem>
                            web applications (with
                            <Link padding="0 0 0 10px" style={{textDecoration: 'underline'}} textColor="hotpink" href="https://rocket.rs/">Rocket</Link> or
                            <Link padding="0 0 0 10px" style={{textDecoration: 'underline'}} textColor="hotpink" href="https://github.com/DenisKolodin/yew">yew</Link>
                            )</ListItem></Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit>Wasm might be the performance improvement you are looking for</Heading>
                    <Image src={perfGraph} height={700}/>
                </Slide>
                <Slide bgColor="#08415c">
                    <Quote>So... how do I use WebAssembly?</Quote>
                </Slide>
                <Slide>
                    <Heading fit>Write Wasm with Rust</Heading>
                    <Layout>
                        <Fill><Image padding="10px" src={rustLogo} height={250}/></Fill>
                        <Fill><Image padding="10px" src={heart} height={250}/></Fill>
                        <Fill><Image padding="10px" src={wasmLogo} height={250}/></Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading size={1}>Install Rust</Heading>
                    <CodePane
                        padding="10px"
                        lang="bash"
                        source={installRust}
                    ></CodePane>
                </Slide>
                <Slide>
                    <Heading fit>Use Rust in a Web App</Heading>
                    <Text>package.json</Text>
                    <CodePane
                        padding="10px"
                        lang="json"
                        source={pkg}
                    ></CodePane>
                    <Layout>
                        <Fill>
                            <Text>main.rs</Text>
                            <CodePane
                                padding="5px"
                                lang="rust"
                                source={rust}
                            ></CodePane>
                        </Fill>
                        <Fill>
                            <Text>foo.js</Text>
                            <CodePane
                                padding="5px"
                                lang="js"
                                source={useRust}
                            ></CodePane>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading fit>If you don't like Rust...</Heading>
                    <Image height={100} src={waltLogo}/>
                    <CodePane
                        padding="5px"
                        lang="bash"
                        source={installWalt}
                    ></CodePane>
                    <Appear>
                        <CodePane
                            padding="5px"
                            lang="clike"
                            source={walt}
                        ></CodePane>
                    </Appear>
                    <Appear>
                        <CodePane
                            padding="5px"
                            lang="js"
                            source={useWalt}
                        ></CodePane>
                    </Appear>
                </Slide>
            </Deck>
        );
    }
}
