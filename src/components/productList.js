// ProductListPage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, selectProduct } from '../redux/actions';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const ProductListPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [sortedProducts, setSortedProducts] = useState(products);
    const history = useNavigate()
    const [sortDirection, setSortDirection] = useState('asc'); // State to track sorting direction
    const [selectedSortOption, setSelectedSortOption] = useState('price');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Use local JSON data instead of fetching from an API
        dispatch(setProducts(products));
    }, [dispatch]);

    useEffect(() => {
        console.log(searchQuery)
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()
            ))
        console.log('hi', filteredProducts)
        setSortedProducts(filteredProducts);
    }, [searchQuery, products]);

    const viewDetails = (product) => {
        dispatch(selectProduct(product)); // Dispatch action to select the product
        history(`/product/${product.id}`); // Navigate to the product detail page
    };

    const sortProducts = (option, direction) => {
        const sorted = [...sortedProducts].sort((a, b) => {
            if (option === 'price') {
                return direction === 'asc' ? a.price - b.price : b.price - a.price;
            } else {
                return direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            }
        });
        setSortedProducts(sorted);
    };

    const handleSortChange = (event) => {
        const { name, value } = event.target;
        if (name === 'sortOption') {
            setSelectedSortOption(value);
            sortProducts(value, sortDirection);
        } else if (name === 'sortDirection') {
            setSortDirection(value);
            sortProducts(selectedSortOption, value);
        }
    };
    return (
        <div className='container' style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '15px' }}>
            <div className='fixed-controls'>
                <h1>Product List</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ marginRight: 10 }}
                    />

                    <label htmlFor="sortDirection">Direction:</label>
                    <select id="sortDirection" name="sortDirection" value={sortDirection} onChange={handleSortChange}>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>

                </div>
            </div>
            <ul className="product-list" style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between" }}>
                {sortedProducts.map((product) => (
                    <li key={product.id} className="product-item" style={{ height: '55vh', width: '20vw' }}>
                        <img src={product.image} alt={product.name} width="100%" height="40%" />
                        <h3>{product.name}</h3>
                        <p style={{ fontSize: '15px' }}>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button className='back-button' onClick={() => viewDetails(product)}>View Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListPage;
