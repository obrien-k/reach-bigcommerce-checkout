import React from 'react';

export default function Quantity({ quantity: { product_id, num, state }, QuantityIncrease, QuantityDecrease }) {
    return (
        <div className="list-item">
            <input type="text" value={product_id} readOnly={true} />
        </div>
    );
}