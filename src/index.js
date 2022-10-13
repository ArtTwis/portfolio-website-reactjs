import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './Base';
import Home from './HomePage/Home';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/education' element={<Base />} />
        <Route path='/experience' element={<Base />} />
        <Route path='/projects' element={<Base />} />
        <Route path='/blogs' element={<Base />} />
        <Route path='/contactme' element={<Base />} />
      </Routes>
    </Router>
  </Provider>
);
