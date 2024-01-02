import {CORE_CONCEPTS} from "./data";
import {CoreConcepts} from "./components/CoreConcepts";
import {EXAMPLES} from "./data";
import {Concepts} from "./components/Concepts";
import Header from "./components/Header";
const descriptors = ['Fundamental', 'Crucial', 'Core'];
import {useState} from "react";

function randomInt(value) {
    return Math.floor(Math.random() * value);
}

function App() {
    const descriptor = descriptors[randomInt(2)];
    const [state, setState] = useState();

    function handleClick(buttonSelected) {
        setState(buttonSelected);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (state) {
        tabContent = (<div id="tab-content">
                <h3>{EXAMPLES[state].title}</h3>
                <p>{EXAMPLES[state].description}</p>
                <pre>
          <code>{EXAMPLES[state].code}</code>
        </pre>
            </div>);
    }

    return (<div>
        <Header/>

        <main>
            <section id="core-concepts">
                <h2>Time to get started!</h2>
                <ul>
                    {CORE_CONCEPTS.map((concepts) => (
                        <CoreConcepts key={concepts.title} {...concepts}/>
                    ))}

                </ul>
            </section>
            <section id="examples">
                <h2>Concepts</h2>
                <menu>
                    <Concepts isClicked={state === 'components'}
                              onSelect={() => {
                                  handleClick('components')
                              }}>Components</Concepts>
                    <Concepts isClicked={state === 'jsx'} onSelect={() => {
                        handleClick('jsx')
                    }}>JSX</Concepts>
                    <Concepts isClicked={state === 'props'} onSelect={() => {
                        handleClick('props')
                    }}>Props</Concepts>
                    <Concepts isClicked={state === 'state'} onSelect={() => {
                        handleClick('state')
                    }}>State</Concepts>
                </menu>
                {tabContent}
            </section>
        </main>
    </div>);
}

export default App;
