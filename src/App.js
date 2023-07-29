import Another from "./Pages/Another";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import { Link, Switch, Routes, Route, HashRouter } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Pages/Nav";
const NavStyles = styled.nav`
  ul {
    margin: 20px 0;
    padding: 0;
  }

  li {
    margin: 0 10px 0 0;
    padding: 0;
    list-style: none;
    display: inline-block;
  }
`;

const LinkStyles = styled(Link)`
  border-radius: 3px;
  border: 2px solid palevioletred;
  background: palevioletred;
  color: white;
  padding: 0.25em 1em;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
`;

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/another" element={<Another />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;