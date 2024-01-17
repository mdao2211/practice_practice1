import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Records from './records.json';
import './App.css';

function App() {
  const [products, setProducts] = useState(Records);
  const [filteredProducts, setFilteredProducts] = useState(Records);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilter = (value) => {
    if (value === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.content.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleEdit = (productId, editedContent) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, content: editedContent } : product
      )
    );
  };

  const handleDelete = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <button onClick={() => handleFilter('All')}>Show All</button>
      <button onClick={() => handleFilter('Mer')}>Filter Mer</button>
      <button onClick={() => handleFilter('Porsche')}>Filter Porsche</button>
      <button onClick={() => handleFilter('Lambor')}>Filter Lambor</button>

      <ProductList products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
