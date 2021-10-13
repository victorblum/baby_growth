import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import children3 from './children3.png'
import './Login.css';

export default class Login extends Component {
	state = {
        showFormLogin: 'block',
        showFormReset: 'none'
    };

	resetForm = () => {
		this.setState ({ showFormLogin: 'none', showFormReset: 'block' })
	}

    render() { 
		const { showFormLogin, showFormReset } = this.state;
        return ( 
			<div className="log__description">
				<form style={{ display: showFormLogin }} className="log__form">
					<h2 className="log__header">
						Your account
					</h2>
					<input className="log__input" type="text" name="username" placeholder="Username"/>
					<input className="log__input" type="password" name="pass" placeholder="Password"/>
					<button className="log__button">
						LOG IN
					</button>
					<div className="log__links">
						<button onClick={this.resetForm} type="button" className="log__link">
							Forgot Username / Password?
						</button>
					</div>
					<div className="log__links">
						<Link className="log__link" to="/registration">
							Create new account						
						</Link>
					</div>
				</form>
				<form style={{ display: showFormReset }} className="log__form_password">
					<h2 className="log__header">
						Reset account
					</h2>
					<input className="log__input" type="email" name="username" placeholder="Email"/>
					<button className="log__button">
						RESET
					</button>
				</form>
				<img src={children3} className="children3" alt="children_image" />
			</div>
        )
    }
}