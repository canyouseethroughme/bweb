import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Acasa from "./components/Acasa";
import Contact from "./components/Contact";
import DespreNoi from "./components/DespreNoi";
import WebDesign from "./components/WebDesign";
import WebHosting from "./components/WebHosting";
import { darkBlack } from "./utils";

const App: React.FC = () => {
  return (
    <Router>
      <Nav>
        <Ul>
          <Img>
            <Link to="/">
              <img
                src="/logo_black.png"
                alt="logo"
                style={{ width: "6rem", height: "100%" }}
              />
            </Link>
          </Img>
          <LinkUl>
            <Li>
              <Link to="/despre-noi">Despre noi</Link>
            </Li>
            <Li>
              <Link to="/web-design">Web Design</Link>
            </Li>
            <Li>
              <Link to="/web-hosting">Web Hosting</Link>
            </Li>
            <Li>
              <Link to="/contact">Contact</Link>
            </Li>
          </LinkUl>
        </Ul>
      </Nav>

      <Switch>
        <Route exact path="/">
          <Acasa />
        </Route>
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

const Ul = styled.ul`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: end;
  align-items: center;
  list-style-type: none;
`;

const LinkUl = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Li = styled.li`
  text-decoration: none;
  :not(:last-child) {
    margin-right: 2rem;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 200;
  }

  a:hover {
    transition: 0.3s;
    color: #ffdf6c;
  }
`;

const Nav = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${darkBlack};
`;

const Img = styled.div`
  justify-self: start;
`;
