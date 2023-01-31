const Person = (props) => {
    let voteText = props.age >= 18 ? "please go vote!" : "you must be 18!";
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    let name = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}