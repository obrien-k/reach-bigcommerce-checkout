import React from 'react';
import Quantity from './Quantity';

export default {
    component: Quantity,
    title: 'Quantity',
};

const Template = args => <Quantity {...args} />;

export const Default = Template.bind({});
Default.args = {
    quantity: {
        product_id: '1',
        num: '1',
        state: 'QUANTITY_IN_CART',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const QuantityIncrease = Template.bind({});
QuantityIncrease.args = {
    quantity: {
        ...Default.args.quantity,
        state: 'QUANTITY_INCREASE',
    },
};

export const QuantityDecrease = Template.bind({});
QuantityDecrease.args = {
    quantity: {
        ...Default.args.quantity,
        state: 'QUANTITY_DECREASE',
    },
};