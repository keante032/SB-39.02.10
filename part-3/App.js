const App = () => {
    return (
        <div>
            <Person
                name="Kevin Templeton"
                age={31}
                hobbies={["Star Wars", "Lord of the Rings", "Bitcoin"]}
            />
            <Person
                name="Mike Templeton"
                age={37}
                hobbies={["Star Wars", "Lord of the Rings", "marketing"]}
            />
            <Person
                name="Dave Templeton"
                age={62}
                hobbies={["Star Wars", "Lord of the Rings", "solitaire"]}
            />
        </div>
    )
}