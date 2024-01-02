import img from "../assets/config.png";

export function CoreConcepts(props) {
    return (
        <div className= "core-concepts">
            <li>
                <img src={props.image} alt={"Image"}/>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </li>
        </div>
    );
}