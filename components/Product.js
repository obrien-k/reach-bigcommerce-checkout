import React from 'react';

export default function Product({ product: { id, product_id, variant_id, qty, state }, onArchiveCart, onPinCart }) {
    return (
        <div className="list-item">
            <input type="text" value={product_id} readOnly={true} />
        </div>
    );
}