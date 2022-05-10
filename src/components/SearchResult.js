import { useContext } from "react";
import { MyContext } from "./SearchContext";

const SearchResult = () => {
  console.log("result");

  const { data } = useContext(MyContext);

  return (
    <>
      <div className="search-result-box">
        <div>
          <h4>Word:</h4>
          <p className="text-capitalize">{data.word}</p>
        </div>
        <div>
          <h4>Meaning:</h4>
          <p>{data.defination}</p>
        </div>
        <div>
          <h4>Part of Speech:</h4>
          <p className="text-capitalize">{data.partOfSpeech}</p>
        </div>
        <div>
          <h4>Synonym:</h4>
          <p className="text-capitalize">{data.synonyms}</p>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
