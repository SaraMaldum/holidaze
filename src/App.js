import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
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
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
