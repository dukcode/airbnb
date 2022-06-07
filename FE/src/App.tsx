import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import SearchResult from 'pages/SearchResult';
import { ModalContext } from 'components/context/ModalContext';

function App() {
  return (
    <ModalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/searchResult" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </ModalContext>
  );
}

export default App;
