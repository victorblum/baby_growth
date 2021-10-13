import React, { Component } from 'react';
import store from '../Redux/Store';
import './Filters.css';

export default class Filters extends Component {
    state = {
        showDescription: 'none',
        physicalLargeSkills: '',
        physicalSmallSkills: '',
        socialBehavior: '',
        socialSmallSkills: '',
        speech: '',
        cognitiveSphere: ''
    };

    componentDidMount() {
        store.subscribe(() => {
          const state = store.getState();
          state.filters.map((item) => {
            return this.setState({ 
                showDescription: 'block',
                physicalLargeSkills: item.physicalLargeSkills,
                physicalSmallSkills: item.physicalSmallSkills,
                socialBehavior: item.socialBehavior,
                socialSmallSkills: item.socialSmallSkills,
                speech: item.speech,
                cognitiveSphere: item.cognitiveSphere
            });})
        })
    };

    clickFilter = (key) => {
        store.dispatch({
            type: 'FIND_DATA',
            payload: {
                filter: key
            }
        })
    }

    render() { 
        const { showDescription, physicalLargeSkills, physicalSmallSkills, socialBehavior, socialSmallSkills, speech, cognitiveSphere } = this.state;
        return (
            <div className="filters__content">
                <div className="filters">
                    <div className="filters__myUl">
                        <ul className="myUl">
                        <li><button onClick={() => this.clickFilter(1)} type="button">0-3 months</button></li>
                        <li><button onClick={() => this.clickFilter(2)} type="button">3-6 months</button></li>
                        <li><button onClick={() => this.clickFilter(3)} type="button">6-9 months</button></li>
                        <li><button onClick={() => this.clickFilter(4)} type="button">9-12 months</button></li>
                        <li><button onClick={() => this.clickFilter(5)} type="button">12-18 months</button></li>
                        <li><button onClick={() => this.clickFilter(6)} type="button">18-24 months</button></li>
                        </ul>
                    </div>
                    <div className="filters__blocks">
                        <div className="filters__up">
                            <div className="filters__up_left" style={{background: "#2a9d8f"}}>
                                <h2 className="filters__title">Physical evolve</h2>
                                <p className="filters__title_discribe">Large and small motor skills, coordination</p>
                                <hr/>
                                <div className="filters__descrip" style={{ display: showDescription }}>
                                    <h4 className="filters__head_theme">Evolve of large motor skills</h4>
                                    <hr/>
                                    <p className="description_block">{physicalLargeSkills}</p>
                                    <br/>
                                    <h4 className="filters__head_theme">Evolve of small motor skills</h4>
                                    <hr/>
                                    <p className="description_block">{physicalSmallSkills}</p>
                                </div>
                            </div>
                            <div className="filters__up_right" style={{background: "#e9c46a"}}>
                                <h2 className="filters__title">Social evolve and emotional environ </h2>
                                <p className="filters__title_discribe">Calming down, exploring emotions</p>
                                <hr/>
                                <div className="filters__descrip" style={{ display: showDescription }}>
                                    <h4 className="filters__head_theme">Behavior</h4>
                                    <hr/>
                                    <p className="description_block">{socialBehavior}</p>
                                    <br/>
                                    <h4 className="filters__head_theme">Evolve of small motor skills</h4>
                                    <hr/>
                                    <p className="description_block">{socialSmallSkills}</p>
                                </div>
                            </div>                  
                        </div>
                        <div className="filters__down">
                            <div className="filters__down_left" style={{background: "#f4a261"}}>
                                <h2 className="filters__title">Speech</h2>
                                <p className="filters__title_discribe">Calming down, exploring emotions</p>
                                <hr/>
                                <div className="filters__descrip" style={{ display: showDescription }}>
                                    <h4 className="filters__head_theme">Passive vocabulary - the name of objects, the evolve of active speech</h4>
                                    <hr/>
                                    <p className="description_block">{speech}</p>
                                </div>
                            </div>                        
                            <div className="filters__down_right" style={{background: "#264653"}}>
                                <h2 className="filters__title">Cognitive sphere</h2>
                                <p className="filters__title_discribe">Consciousness</p>
                                <hr/>
                                <div className="filters__descrip" style={{ display: showDescription }}>
                                    <h4 className="filters__head_theme">Auditory, tactile, visual perception, memory, attention, thinking</h4>
                                    <hr/>
                                    <p className="description_block">{cognitiveSphere}</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}