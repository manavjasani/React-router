import { useEffect } from "react";
import NoQuotesFound from "../components/Quotes/NoQuotesFound";
import QuoteList from "../components/Quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";


const AllQuote = () => {
    const { sendRequest, status, error, data: loadedQuotes } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest()
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div style={{textAlign: "center"}}>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{textAlign: "center"}}>
                <p>{error}</p>
            </div>
        )
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return (
        <QuoteList quotes={loadedQuotes} />
    )
}

export default AllQuote;