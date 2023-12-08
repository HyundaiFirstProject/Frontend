import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "pages/Routing";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/Redux/rootReducer";
// import { setItems } from "store/Redux/ItemReducer"; // Adjust the path based on your file structure

// import axios from "axios";
// import serverURL from "store/Server/ServerURL";
// const url = serverURL();

const store = configureStore({
  reducer: rootReducer,
});

// axios
//   .get(`${url}/api/bestReviewsProductList/`)
//   .then((response) => {
//     store.dispatch(setItems(response.data)); // API로 받은 데이터를 스토어에 설정
//     renderApp(); // 데이터를 받아온 후에 앱을 렌더링
//   })
//   .catch((error) => {
//     // 에러 처리
//   });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Routing />
  </Provider>
);

export default store;
