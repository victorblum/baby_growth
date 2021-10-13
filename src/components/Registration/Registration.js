import React, { Component } from 'react';
import children from './children.png'
import './Registration.css';

export default class Registration extends Component {
    render() { 
        return ( 
        <div className="reg__content">
            <div className="reg">
                <div className="reg__picture">
                    <img src={children} className="childrens" alt="childrens_image" />
                </div>
                <div className="reg__description">
                    <h2>Create baby account</h2>
                    <form className="decor">
                        <div className="form-inner">
                            <input type="text" placeholder="Name"/>
                            <input type="number" placeholder="Age"/>
                            <select name="country">
                                <option>Country of residence</option>
                                <option value="Estonia">Estonia</option> 
                                <option value="Latvia">Latvia</option> 
                                <option value="Norway">Norway</option> 
                                <option value="Sweden">Sweden</option> 
                            </select> 
                            <div className="radio">
                            <label>
                                <input type="radio" name="sex" value="boy"/>boy
                            </label>
                            <label>
                                <input type="radio" name="sex" value="girl"/>girl
                            </label>
                            </div>
                            <input type="email" placeholder="Email"/>
                            <input type="mobile" placeholder="+7-999-999-9999"/>
                            <button className="reg__button">
						        CREATE
					        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}