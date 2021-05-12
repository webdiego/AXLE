//GlobalStyle
import GlobalStyle from "./Style/GlobalStyle";
//Components
import Home from "./Components/Home";
import Cards from "./Components/Cards";
import How from "./Components/How";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Subscribe />
      <Cards />
      <How />
      <Footer />
    </>
  );
}

export default App;
