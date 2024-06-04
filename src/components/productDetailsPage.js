import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import CSS file for styling

const ProductDetailPage = () => {
    const selectedProduct = useSelector((state) => state.selectedProduct);
    const navigate = useNavigate();

    return (
        <div className="product-detail-container">
            <h1>Product Details</h1>
            {selectedProduct && (
                <div className="product-detail">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
                    <div className="product-info">
                        <h2>{selectedProduct.name}</h2>
                        <p>{selectedProduct.description}</p>
                        <p className="product-price">Price: ${selectedProduct.price}</p>
                    </div>
                </div>
            )}
            <button onClick={() => navigate('/')} className="back-button">Back</button>
        </div>
    );
};

export default ProductDetailPage;
