import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import List from "pages/List";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
