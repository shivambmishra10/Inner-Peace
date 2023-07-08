import React, {useState} from 'react';
import './Name.css';
import {useHistory} from 'react-router-dom';
import logo from '../images/Inner Peace.gif';
import Footer from "./Footer";

const Name = (props) => {

    const [name, setName] = useState('');

    let history = useHistory();

    const nextPage = () => {
        history.push('/Feeling', [name])
    }

    const handleForm = (event) => {
        event.preventDefault();
        nextPage();
    }


    return (
        <div className='name'>
            <div className='nameInside'>
                <div className="gifWrapper">
                    <img className="gif" src={logo} alt="logo"/>
                </div>

                <div className='nameTitle'>
                    <p className='nameSmallTitle'>Never ever doubt the fact that</p>
                    <p  className='nameBigTitle'>YOU MATTER !</p>
                </div>

                <form>
                    <label className="label">
                        Name:
                        <input className="input-name" type="text" name="username" placeholder="Don't forget your name"
                               required value={name} onChange={(e) => setName(e.target.value)}/><br></br>
                    </label><br></br>
                    <input className="button-confirm" type="submit" value="Confirm"
                           onClick={(event) => handleForm(event)}/>
                </form>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Name;