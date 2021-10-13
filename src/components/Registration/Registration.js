import React, { Component } from 'react';
import children2 from './children2.png'
import './Registration.css';

export default class Registration extends Component {
    render() { 
        return ( 
        <div className="reg__content">
            <div className="reg">
                <div className="reg__picture">
                    <img src={children2} className="children2" alt="childrens_image" />
                </div>
                <div className="reg__description">
                    <form className="decor">
                    <h2 className="reg__header">
                        Create account
					</h2>
					<input className="decor__input" type="text" name="username" placeholder="Username"/>
					<input className="decor__input" type="number" name="birthday" placeholder="Birthday"/>
					<input className="decor__input" type="email" name="email" placeholder="Email"/>
                    <input className="decor__input" type="password" name="password" placeholder="Password"/>
                    <h4>Who is your child??</h4>
                    <div className="radio">
                        <label style={{color: "#62D0DF"}}>
                            Boy&ensp;
                            <input type="radio" name="sex" value="boy"/>
                        </label>
                        <label style={{color: "pink"}}>
                            Girl&ensp;
                            <input type="radio" name="sex" value="girl"/>
                        </label>
                    </div>
                    <input className="decor__input" type="number" name="months" placeholder="Months"/>
					<button className="reg__button">
						CREATE
					</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}