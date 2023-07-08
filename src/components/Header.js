import React from "react";
import './Header.css';
import {useHistory} from 'react-router-dom';


const Header = () => {
    let history = useHistory();
    const Breathing = () => {
        history.push('/Breathing')
    }
    const Help = () => {
        history.push('/Help')
    }
    const Guidance = () => {
        history.push('/Guidance')
    }
    const Grounding = () => {
        history.push('/Grounding')
    }


    return (
        <div className='headerHeader'>
            <button className="headerButton" onClick={Guidance}>Guidance</button>
            <button className="headerButton" onClick={Breathing}>Breathing</button>
            <button className="headerButton" onClick={Grounding}>Grounding</button>
            <button className="headerButton" onClick={Help}>Find Help</button>
        </div>
    )
}

export default Header;