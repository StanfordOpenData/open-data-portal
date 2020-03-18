import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './styles.css';

class CheckoutForm extends Component {
	constructor(props) {
		super(props);
		this.state = { complete: false };
		this.submit = this.submit.bind(this);
	}

	async submit(ev) {
		let { token } = await this.props.stripe.createToken({ name: "Name" });
		let response = await fetch("/charge", {
			method: "POST",
			headers: { "Content-Type": "text/plain" },
			body: token.id
		});
		if (response.ok) this.setState({ complete: true });
	}

	render() {
		if (this.state.complete) return <h3>Thank you! We have received your post, and we will notify you if it's approved.</h3>;

		return (
			<div className="checkout">
				<form className="postJob" onSubmit={this.handleSubmit}>
					<label for="name">Name</label>
					<input type="text" name="name" placeholder="Jane Doe" required></input>
					<label for="email">Email</label>
          <input type="email" name="email" placeholder="janedoe@gmail.com" required></input>
					<label for="tel">Phone</label>
					<label></label><input type="tel" name="phone" placeholder="555-555-5555" required></input>
					<label>Card information</label>
					<CardElement />
					<button type="submit" onClick={this.submit}>Complete Post</button>
				</form>
			</div>
		);
	}

}

export default injectStripe(CheckoutForm);