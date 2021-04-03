import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "@emotion/styled";
import Acasa from "./components/Acasa";
import Contact from "./components/Contact";
import DespreNoi from "./components/DespreNoi";
import WebDesign from "./components/WebDesign";
import WebHosting from "./components/WebHosting";
import { AnimatePresence } from "framer-motion";
import { yellow, white } from "./utils";

const App: React.FC = () => {
  return (
    <Router>
      <Nav>
        <Ul>
          <Img>
            <NavLink to="/">
              <img
                src="/logo_black.png"
                alt="logo"
                style={{ width: "6rem", height: "100%" }}
              />
            </NavLink>
          </Img>
          <LinkUl>
            <Li>
              <NavLink exact to="/" activeClassName="active">
                Acasa
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/despre-noi" activeClassName="active">
                Despre noi
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/web-design" activeClassName="active">
                Web Design
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/web-hosting" activeClassName="active">
                Web Hosting
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </Li>
          </LinkUl>
        </Ul>
      </Nav>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Acasa} />
          <Route path="/despre-noi" component={DespreNoi} />
          <Route path="/web-design" component={WebDesign} />
          <Route path="/web-hosting" component={WebHosting} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
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
    color: ${white};
    font-weight: 200;
  }

  a:hover {
    transition: 0.3s;
    color: ${yellow};
  }

  .active {
    color: ${yellow};
  }
`;

const Nav = styled.div`
  z-index: 100;
  position: relative;
  margin: auto;
  width: 75rem;
  height: 5rem;
  background-color: transparent;
`;

const Img = styled.div`
  justify-self: start;
`;
