import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {

    // myFunction() {
    //     var input, filter, ul, li, a, i;
    //     input = document.getElementById('myInput');
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("myUL");
    //     li = ul.getElementsByTagName('li');
    
    //     for (i = 0; i < li.length; i++) {
    //         a = li[i].getElementsByTagName("a")[0];
    //         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //             li[i].style.display = "";
    //         } else {
    //             li[i].style.display = "none";
    //         }
    //     }
    // }

    render() { 
        return (
            <div className="filters__content">
                <div className="filters">
                    <div className="filters__myUl">
                        <ul className="myUl">
                        <li><a href="#">0-3 months</a></li>
                        <li><a href="#">3-6 months</a></li>
                        <li><a href="#">6-9 months</a></li>
                        <li><a href="#">9-12 months</a></li>
                        <li><a href="#">12-18 months</a></li>
                        <li><a href="#">18-24 months</a></li>
                        </ul>
                    </div>
                    <div className="filters__blocks">
                        <div className="filters__up">
                            <div className="filters__up_left" style={{background: "#2a9d8f"}}>
                                <h2 className="filters__title">Physical evolve</h2>
                                <p className="filters__title_discribe">Large and small motor skills, coordination</p>
                                <hr/>
                                {/* <div className="filters__h4">
                                    <h4 className="filters__head_theme">Evolve of large motor skills</h4>
                                    <h4 className="filters__head_theme">Evolve of small motor skills</h4>
                                </div> */}
                            </div>
                            <div className="filters__up_right" style={{background: "#e9c46a"}}>
                                <h2 className="filters__title">Social evolve and emotional environ </h2>
                                <p className="filters__title_discribe">Calming down, exploring emotions</p>
                                <hr/>
                                {/* <div className="filters__h4">
                                    <h4 className="filters__head_theme">Behavior</h4>
                                    <h4 className="filters__head_theme">Evolve of small motor skills</h4>
                                </div> */}
                            </div>                  
                        </div>
                        <div className="filters__down">
                            <div className="filters__down_left" style={{background: "#f4a261"}}>
                                <h2 className="filters__title">Speech</h2>
                                <p className="filters__title_discribe">Calming down, exploring emotions</p>
                                <hr/>
                                {/* <h4 className="filters__head_theme">Passive vocabulary - the name of objects, the evolve of active speech</h4> */}
                            </div>                        
                            <div className="filters__down_right" style={{background: "#264653"}}>
                                <h2 className="filters__title">Cognitive sphere</h2>
                                <p className="filters__title_discribe">Consciousness</p>
                                <hr/>
                                {/* <h4 className="filters__head_theme">Auditory, tactile, visual perception, memory, attention, thinking</h4> */}
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}