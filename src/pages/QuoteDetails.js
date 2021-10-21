import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import HighlightedQuote from "../components/Quotes/HighlightedQuote";

const QuoteDetail = () => {
    const params = useParams();

    const DUMMY_QUOTES = [
        {id: 'q1', author: 'Mj', text: 'Learning React is fun!'},
        {id: 'q2', author: 'Mj1234', text: 'Learning React is great!'}
    ]

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found!</p> 
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <Link to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;