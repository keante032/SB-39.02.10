const Tweet = ({username, name, date, message}) => {
    return (
        <div className="tweet">
            <p>{message}</p>
            <span>{name}</span>
            <span className="username">@{username}</span>
            <span className="date">{date}</span>
        </div>
    );
}