import Nav from "../Nav/nav";
import Footer from "../footer/footer";
import Section from "../section/Section";
import "./home.css";


function App() {
  return (
    <>
    <div className="app-container">
          <Nav />
          <Section/>
          <Footer />

    </div>
          <script src='../efectoHoverTittle.js'></script>

    </>
  );
}

export default App;
