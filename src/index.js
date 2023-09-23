import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./Base";
import Home from "./Pages/HomePage/Home";
import Story from "./Pages/MyStory/Story";
import CareerPage from "./Pages/Career/Career";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router basename='/portfolio-website-reactjs'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/mystory' element={<Story />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/projects' element={<Base />} />
        <Route path='/blogs' element={<Base />} />
        <Route path='/contactme' element={<Base />} />
      </Routes>
    </Router>
  </Provider>
);
