import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Container } from './Styled/Container';
import { GlobalStyle } from "./Styled/Global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Route path="/" exact component={Home} />
        <Route path="/pricing" component={Pricing} />
      </Container>
    </Router>
  );
}

export default App;