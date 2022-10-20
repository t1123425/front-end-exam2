import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import App from './App';
import Tags from './pages/Tags';
import Search from './pages/Search';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './assets/main.scss';
import {server} from './plugins/mirageServer';

server();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/tags" element={<Tags />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
