import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Lists from './pages/Lists';
import Error from './pages/Error';

class App extends Component {
  render () {
    return (
      <Router basename="/react-shopping-webapp">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/Lists" element={<Lists />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
