import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/header";
import Home from "./pages/home";
import NotFaund from "./pages/notFaund";
import Card from "./pages/Card";
import FullPizza from "./pages/fullPizza";

export const AppContext = React.createContext({
  searchVelue: "",
  setSearchVelue: (theme: string) => {},
});

function App() {
  const [searchVelue, setSearchVelue] = React.useState("");
  return (
    <Wrapper className="wrapper">
      <AppContext.Provider value={{ searchVelue, setSearchVelue }}>
        <Header />
        <Content className="content">
          <Container className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<Card />} />
              <Route path="/pizza/:id" element={<FullPizza />} />
              <Route path="*" element={<NotFaund />} />
            </Routes>
          </Container>
        </Content>
      </AppContext.Provider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
`;

const Content = styled.div`
  padding: 40px 0;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default App;
