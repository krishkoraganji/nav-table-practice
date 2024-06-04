// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductListPage from './components/productList';
import ProductDetailPage from './components/productDetailsPage';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<ProductListPage />} />
                    <Route exact path="/product/:id" element={<ProductDetailPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
