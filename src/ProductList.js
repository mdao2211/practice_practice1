import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products, onEdit, onDelete }) => {
  const [showEditingControls, setShowEditingControls] = useState(false);

  return (
    <div>
      <button onClick={() => setShowEditingControls(!showEditingControls)}>
        Toggle Editing Controls
      </button>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            showEditingControls={showEditingControls}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
