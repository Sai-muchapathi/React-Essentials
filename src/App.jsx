import {CORE_CONCEPTS} from "./data";
import {CoreConcepts} from "./CoreConcepts";

const descriptors = ['Fundamental', 'Crucial', 'Core'];
import img from "./assets/config.png";

function randomInt(value) {
    return Math.floor(Math.random() * value);
}
function handleClick(buttonSelected) {
    console.log({buttonSelected});
}
function Concepts({children, onSelect}) {


    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

function App() {
    const descriptor = descriptors[randomInt(2)];
    return (
        <div>
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
                        <Concepts onSelect={() => {handleClick('Components')}}>Components</Concepts>
                        <Concepts onSelect={() => {handleClick('JSX')}}>JSX</Concepts>
                        <Concepts onSelect={() => {handleClick('Props')}}>Props</Concepts>
                        <Concepts onSelect={() => {handleClick('State')}}>State</Concepts>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
