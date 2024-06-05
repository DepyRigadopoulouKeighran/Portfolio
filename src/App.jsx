import "./App.css";
import "./index.css";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import PageContainer from "./components/pageContainer/PageContainer.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <PageContainer>
        <Header />
        <HomePage />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </PageContainer>
    </>
  );
}

export default App;

// sm:max-w-md
// max-w-xs
