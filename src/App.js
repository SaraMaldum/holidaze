import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Footer from './components/visitor/layout/footer/Footer';
import styled from 'styled-components';
import './App.css';
import Layout from './components/visitor/layout/Layout';

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
        <Layout>

          <GlobalStyles />

          </Layout>
        </Wrapper>

        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
