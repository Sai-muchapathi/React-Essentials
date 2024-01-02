import {CORE_CONCEPTS} from "./data";
import {CoreConcepts} from "./CoreConcepts";
import {EXAMPLES} from "./data";
const descriptors = ['Fundamental', 'Crucial', 'Core'];
import img from "./assets/config.png";
import {useState} from "react";

function randomInt(value) {
    return Math.floor(Math.random() * value);
}

function Concepts({children, onSelect}) {


    return (<li>
        <button onClick={onSelect}>{children}</button>
    </li>);
}

function App() {


    const descriptor = descriptors[randomInt(2)];
    const [state, setState] = useState();

    function handleClick(buttonSelected) {
        setState(buttonSelected);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (state) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[state].title}</h3>
                <p>{EXAMPLES[state].description}</p>
                <pre>
          <code>{EXAMPLES[state].code}</code>
        </pre>
            </div>
        );
    }

    return (<div>
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {descriptor} Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
        <main>
            <section id="core-concepts">
                <h2>Time to get started!</h2>
                <ul>
                    <CoreConcepts {...CORE_CONCEPTS[0]}/>
                    <CoreConcepts {...CORE_CONCEPTS[1]}/>
                    <CoreConcepts {...CORE_CONCEPTS[2]}/>
                    <CoreConcepts {...CORE_CONCEPTS[3]}/>
                </ul>
            </section>
            <section id="examples">
                <h2>Concepts</h2>
                <menu>
                    <Concepts onSelect={() => {
                        handleClick('components')
                    }}>Components</Concepts>
                    <Concepts onSelect={() => {
                        handleClick('jsx')
                    }}>JSX</Concepts>
                    <Concepts onSelect={() => {
                        handleClick('props')
                    }}>Props</Concepts>
                    <Concepts onSelect={() => {
                        handleClick('state')
                    }}>State</Concepts>
                </menu>
                {tabContent}
            </section>
        </main>
    </div>);
}

export default App;
