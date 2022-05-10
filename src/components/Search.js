import { useRef, useContext } from "react";
import { MyContext } from "./SearchContext";

const Search = () => {
  console.log("search");

  const inputRef = useRef();
  const buttonRef = useRef();
  const { setData } = useContext(MyContext);

  const searchData = (keyword) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        const word = data[0].word;
        const { definitions, partOfSpeech, synonyms: synonym } = data[0].meanings[0];
        const defination = definitions[0].definition;
        const synonyms = synonym.join(", ");

        const result = { word, defination, partOfSpeech, synonyms };

        setData(result);
        buttonRef.current.disabled = false;
        buttonRef.current.innerText = "Search";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClick = async () => {
    const value = inputRef.current.value;

    if (!value) {
      return alert("Please enter some keyword to search.");
    }

    buttonRef.current.disabled = true;
    buttonRef.current.innerText = "Searching...";

    searchData(value);

    inputRef.current.value = "";
  };

  return (
    <>
      <div className="search-box">
        <input ref={inputRef} type="text" className="search-box__search-input" placeholder="Search for a word..." />
        <button ref={buttonRef} onClick={onClick} type="button" className="search-box__search-btn">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
