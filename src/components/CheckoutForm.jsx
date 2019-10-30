import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

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
        if (this.state.complete) return <h1>Purchase Complete</h1>;

        return (
            <div className="checkout">
                <p id="root__title">Would you like to complete the purchase?</p>
                <form onSubmit={this.handleSubmit}>
                    Name
                    <input type="text" name="name" placeholder="Jane Doe" required></input>
                    Email
                    <input type="email" name="email" placeholder="janedoe@gmail.com" required></input>
                    Phone
                    <input type="tel" name="phone" placeholder="555-555-5555" required></input>
                    Card information
                    <CardElement />
                    <button type="submit" onClick={this.submit}>Complete Post</button>
                </form>
            </div>
        );
    }

}

export default injectStripe(CheckoutForm);