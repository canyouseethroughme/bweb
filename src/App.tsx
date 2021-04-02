import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Contact from "./components/Contact";
import DespreNoi from "./components/DespreNoi";
import WebDesign from "./components/WebDesign";
import WebHosting from "./components/WebHosting";

const Nav = styled.div`
  width: 100vw;
  height: 6rem;
  background-color: pink;
`;

const Ul = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const App: React.FC = () => {
  return (
    <Router>
      <Nav>
        <Ul>
          <li>
            <Link to="/despre-noi">Despre noi</Link>
          </li>
          <li>
            <Link to="/web-design">Web Design</Link>
          </li>
          <li>
            <Link to="/web-hosting">Web Hosting</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Ul>
      </Nav>

      <Switch>
        <Route path="/despre-noi">
          <DespreNoi />
        </Route>
        <Route path="/web-design">
          <WebDesign />
        </Route>
        <Route path="/web-hosting">
          <WebHosting />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
