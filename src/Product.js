import React, { useState } from 'react';

const Product = ({ product, showEditingControls, onEdit, onDelete }) => {
  const [editedContent, setEditedContent] = useState(product.content);

  const handleEdit = () => {
    onEdit(product.id, editedContent);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <li>
      {showEditingControls && (
        <>
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
      <span>{product.content}</span>
    </li>
  );
};

export default Product;
