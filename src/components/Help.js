import React from "react";
import './Help.css';
import speak from '../images/conversation.png';
import heart from '../images/heart.png';
import help from '../images/help.png';
import find from '../images/find.png';
import Header from "./Header";

const Help = (props) => {

    return (
        <>
            <Header/>
            <div className="helps">
                <div className="near">
                    <h2 className='ask'> Help near you</h2>
                    <div className="speak">
                        <p className="text-help">Dear friends,</p>
                        <img className="icon-help" src={speak} alt="read"/>
                        <p className="text-help">On the map you can find psychologists in Flanders.</p>
                        <p className="text-help"><em>Don't hesitate to ask for help !</em></p>
                    </div>
                    <div className="help">
                        <img className="icon-help" src={help} alt="read"/>
                        <p className="text-help">The biggest step is being aware of it and the next step is the most
                            courageous one,</p>
                        <p className="text-help"><em>asking for help !</em></p>
                    </div>
                    <div className="heart">
                        <p className="text-help">When we are physically hurt, we go to the doctor so</p>
                        <p className="text-help">when we are mentally hurt, we go to the psychologist.</p>
                        <img className="icon-help" src={heart} alt="read"/>
                        <p className="text-help">Fight the taboo and fight for yourself !</p>
                    </div>
                </div>
                <div className="asking">
                    <div className="askWrapper">
                        <h2 className="ask"> Asking for help is brave !</h2>
                        <img className="icon-find" src={find} alt="read"/>
                    </div>
                    <div className="map-psychologists">
                        <iframe title="Psychologists Map of Flanders in Belgium"
                                src="https://www.google.com/maps/d/embed?mid=1_NIgJ2l5J8IzI7hfAP6ESRYHeX8"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help;