import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import ListPets from "pages/ListPets";
import ListReview from "pages/ListReview";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import Mypage from "pages/Mypage";
import PostPets from "pages/PostPets";
import PostReview from "pages/PostReview";
import UploadPets from "pages/UploadPets";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/list-pets/:pageNumber" element={<ListPets />}></Route>
        <Route
          path="/list-pets/:pageNumber/:postID"
          element={<PostPets />}
        ></Route>
        <Route path="/list-review/:pageNumber" element={<ListReview />}></Route>
        <Route
          path="/list-review/:pageNumber/:postID"
          element={<PostReview />}
        ></Route>
        <Route path="/uploadPets" element={<UploadPets />}></Route>
        <Route path="/uploadPets/:postID" element={<UploadPets />}></Route>
        {/* 수정용 라우팅 */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
