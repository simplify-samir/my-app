import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/home';
import ProductList from './components/product-list';
import NotFound from './components/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="product-list" element={<ProductList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
