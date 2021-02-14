import React from 'react';
import Product from './Product';

export default {
    component: Product,
    title: 'Product',
};

const Template = args => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
    product: {
        id: '1',
        title: 'Test Product',
        state: 'PRODUCT_NO_CART',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const InCart = Template.bind({});
InCart.args = {
    product: {
        ...Default.args.product,
        state: 'PRODUCT_IN_CART',
    },
};

export const Checkout = Template.bind({});
Checkout.args = {
    product: {
        ...Default.args.product,
        state: 'PRODUCT_CHECKOUT',
    },
};