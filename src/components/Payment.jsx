
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements, StripeProvider } from 'react-stripe-elements';
import './styles.css';

function Payment() { // once completed, need to redirect to /post-submitted to show confirmation page
		return (
			<div>
				<h3>Thank you for entering the job description!</h3>
				<p>To complete the submission, please enter payment information. You will be charged $50 if the post is approved.</p>
				<StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
					<div>
						<Elements>
							<CheckoutForm />
						</Elements>
					</div>
				</StripeProvider>
			</div>
		)
}

export default Payment;
