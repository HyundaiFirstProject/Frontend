import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import ListPets from "pages/ListPets";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import Mypage from "pages/Mypage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/list-pets:postingID" element={<ListPets />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
