import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Navbar from './components/visitor/layout/navbar/Navbar';
import Footer from './components/visitor/layout/footer/Footer';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.div`
  &.wrapper {
    flex: 1 0 auto;
}
`

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper className="wrapper">
          <GlobalStyles />
          <Navbar />
        </Wrapper>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
