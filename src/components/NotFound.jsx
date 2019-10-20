import React, { Component } from 'react';

export default class ErrorNotFound extends Component {

    render() {
        return (
            <div id='error'>
                <h1 className="notFoundTitle">Oops! That page is gone.</h1>
                <p className="notFoundDesc">
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        );
    }
}