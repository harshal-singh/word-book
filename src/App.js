import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  console.log("app");

  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
