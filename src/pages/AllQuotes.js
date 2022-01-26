import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "ali", text: "Learning React is fun!" },
  { id: "q2", author: "mhmd", text: "Learning React is great!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
