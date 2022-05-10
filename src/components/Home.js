import SearchContext from "./SearchContext";

function Home() {
  console.log("home");

  return (
    <>
      <div className="heading">
        <h1>Find meaning of a word.</h1>
        <p>Use search box to find meaning of a word.</p>
      </div>

      <SearchContext />
    </>
  );
}

export default Home;
