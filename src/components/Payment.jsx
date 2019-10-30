
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function Payment() { // once completed, need to redirect to /post-submitted to show confirmation page
    return (
        <StripeCheckout
            stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
            token={this.onToken}
        />
    )
}

export default Payment;