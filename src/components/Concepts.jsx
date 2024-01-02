export function Concepts({children, onSelect, isClicked}) {


    return (<li>
        <button className={isClicked ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>);
}
