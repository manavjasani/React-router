import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import HighlightedQuote from "../components/Quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    const { quoteId } = params;

    const { sendRequest, data: loadedQuotes, error, status } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <LoadingSpinner />
        );
    }

    if (error) {
        return (
            <div style={{textAlign: "center"}}>
                <p>{error}</p>
            </div>
        );
    }

    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!loadedQuotes) {
        return <p>No quote found!</p> 
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
            <Route path={match.path} exact>
                <Link to={`${match.url}/comments`}>Load Comments</Link>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;