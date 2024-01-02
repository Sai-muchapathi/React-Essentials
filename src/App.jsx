import {CORE_CONCEPTS} from "./data";
import {CoreConcepts} from "./CoreConcepts";
const descriptors = ['Fundamental', 'Crucial', 'Core'];
import img from "./assets/config.png";
function randomInt(value) {
    return Math.floor(Math.random() * value);
}

function App() {
    const descriptor = descriptors[randomInt(2)];
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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
            <CoreConcepts
                title={CORE_CONCEPTS[0].title}
                image={CORE_CONCEPTS[0].image}
                description={CORE_CONCEPTS[0].description}
            />
                <CoreConcepts
                    title={CORE_CONCEPTS[1].title}
                    image={CORE_CONCEPTS[1].image}
                    description={CORE_CONCEPTS[1].description}
                />
                <CoreConcepts
                    title={CORE_CONCEPTS[2].title}
                    image={CORE_CONCEPTS[2].image}
                    description={CORE_CONCEPTS[2].description}
                />
                <CoreConcepts
                    title={CORE_CONCEPTS[3].title}
                    image={CORE_CONCEPTS[3].image}
                    description={CORE_CONCEPTS[3].description}
                />
            </ul>
            </section>
        </main>
    </div>
  );
}

export default App;
