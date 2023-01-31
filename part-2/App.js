const App = () => {
    return (
        <div>
            <Tweet
                name="Kevin Templeton"
                username="kevint"
                date={new Date().toDateString()}
                message="We should've done this on a Nostr client."
            />
            <Tweet
                name="Mike Templeton"
                username="miket"
                date={new Date().toDateString()}
                message="No way, Twitter is still the best!"
            />
            <Tweet
                name="Dave Templeton"
                username="davet"
                date={new Date().toDateString()}
                message="I didn't think I had a Twitter account."
            />
        </div>
    )
}