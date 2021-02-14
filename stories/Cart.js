import React from 'react';

export default function Cart({ cart: { id, product_id, variant_id, state }, onArchiveCart, onPinCart }) {
    return (
        <div className="list-item">
            <input type="text" value={product_id} readOnly={true} />
        </div>
    );
}