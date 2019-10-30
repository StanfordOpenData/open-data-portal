
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './styles.css';

export default class Payment extends React.Component { // once completed, need to redirect to /post-submitted to show confirmation page
    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                console.log(`We are in business!`);
            });
        });
    }
    render() {
        return (
            <div>
            Thank you for entering the job description! 
            <p>To continue, please enter payment information. You will be charged $50 if the post is approved.</p>
            <div>
                <StripeCheckout
                name="Stanford Daily Jobs"
                image="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png"
                ComponentClass="div"
                currency="USD"
                panelLabel="Submit"
                stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
                allowRememberMe={false}
                token={this.onToken}
                >
                <button type="submit">
                    Pay and Submit
                </button>
                </StripeCheckout>
                </div>
            </div>
        )
    }
}
