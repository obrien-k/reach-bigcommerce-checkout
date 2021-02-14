import React from 'react';
import Cart from './Cart';

export default {
    component: Cart,
    title: 'Cart',
};

const Template = args => <Cart {...args} />;

export const Default = Template.bind({});
Default.args = {
    cart: {
        id: '1',
        title: 'Test Product',
        state: 'CART_INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    cart: {
        ...Default.args.cart,
        state: 'CART_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    cart: {
        ...Default.args.cart,
        state: 'CART_ARCHIVED',
    },
};