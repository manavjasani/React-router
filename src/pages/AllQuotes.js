import QuoteList from "../components/Quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Mj', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Mj1234', text: 'Learning React is great!'}
]

const AllQuote = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuote;