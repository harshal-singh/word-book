import { useState, createContext } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

export const MyContext = createContext(null);

const SearchContext = () => {
  console.log("search-context");

  const [data, setData] = useState(null);

  return (
    <MyContext.Provider value={{ data, setData }}>
      <Search />
      {data && <SearchResult />}
    </MyContext.Provider>
  );
};

export default SearchContext;
