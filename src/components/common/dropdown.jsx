
const dropdown = (props) => {
    return (
        <select onChange={props.onChange}>
            <option value={"en"}>ENGLISH</option>
            <option value={"de"}>DEUTCH</option>
            <option value={"fr"}>FRENCH</option>
            <option value={"nl"}>NETHERLANDS</option>
        </select>
    );
}

export default dropdown;
