'use strict';

const axios = require('axios');

// SigiloPay API configuration
const apiKey = 'hidrav-n16_s7cnziychawldoso';
const domain = 'http://hrd.empresa.com.br/api';

// Function to process payment
async function processPayment(orderData) {
    try {
        const response = await axios.post(`${domain}/payment`, {
            ...orderData,
            apiKey
        });
        return response.data;
    } catch (error) {
        console.error('Payment processing error:', error.response.data);
        throw error;
    }
}

// Function to prepare order data
function prepareOrderData(amount, currency, customerEmail) {
    return {
        amount,
        currency,
        customer: {
            email: customerEmail
        }
    };
}

// Exporting functions for external usage
module.exports = {
    processPayment,
    prepareOrderData
};
