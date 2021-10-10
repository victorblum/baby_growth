import React, { Component } from 'react';
import children from './children.png'
import './Login.css';

export default class Login extends Component {
    render() { 
        return ( 
        <div className="log__content">
            <div className="log">
                <div className="log__picture">
                    <img src={children} className="childrens" alt="childrens_image" />
                </div>
                <div className="log__description">
                    <h1>Account</h1>
                    <form class="decor">
                        <div class="form-inner">
                            <input type="text" placeholder="Username"/>
                            <input type="email" placeholder="Email"/>
                            <textarea placeholder="Message..." rows="3"></textarea>
                            <input type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}