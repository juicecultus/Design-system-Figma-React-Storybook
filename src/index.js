import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <GlobalStyle />
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
