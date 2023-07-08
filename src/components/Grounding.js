import React, {useState, useRef} from "react";
import './Grounding.css';
import Hear from '../images/hear.png';
import See from '../images/see.png';
import Touch from '../images/feel.png';
import Smell from '../images/smell.png';
import Taste from '../images/taste.png';
import Yay from '../images/yay.png';
import Header from './Header';
import {useHistory} from "react-router-dom";

const Grounding = (props) => {

    const cardRef = useRef(null);

    const [showStartButton, setShowStartButton] = useState(true);
    const [showFive, setShowFive] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showExtras, setShowExtras] = useState(false);

    let history = useHistory();
    const Breathing = () => {
        history.push('/Breathing')
    }

    const StartButton = () => <button id='groundingStart' className='groundingButton' onClick={startGrounding}> I'm
        ready to start</button>
    const Five = () =>
        <div className='groundingCard' ref={cardRef}>
            <img className='groundingIcon' src={See} alt='eye'/>
            <p className='groundingText'>Find <em>5</em> things you <em>see</em> around you.</p>
            <p className='groundingTextSmall'> Maybe a pen or stapler, or maybe a bird or a tree.</p>
            <button className='groundingButton' onClick={display4}> Done</button>
        </div>

    const Four = () =>
        <div className='groundingCard' ref={cardRef}>
            <img className='groundingIcon' src={Touch} alt='hand'/>
            <p className='groundingText'>Find <em>4</em> things you can <em>touch</em> from where you're
                sitting.</p>
            <p className='groundingTextSmall'> Your hair, hands, the ground beneath your feet.</p>
            <button className='groundingButton' onClick={display3}> Done</button>
        </div>

    const Three = () =>
        <div className='groundingCard' ref={cardRef}>
            <img className='groundingIcon' src={Hear} alt='ear'/>
            <p className='groundingText'>Find <em>3</em> things you can <em>hear</em> around you.</p>
            <p className='groundingTextSmall'> Focus on your stomach growling, or a car passing, a dog barking, or
                someone's
                steps.</p>
            <button className='groundingButton' onClick={display2}> Done</button>
        </div>

    const Two = () =>
        <div className='groundingCard' ref={cardRef}>
            <img className='groundingIcon' src={Smell} alt='nose'/>
            <p className='groundingText'>Find <em>2</em> things you can <em>smell</em> around you.</p>
            <p className='groundingTextSmall'> Maybe the soap, your furniture. The outdoors has plenty of options for
                smell.</p>
            <button className='groundingButton' onClick={display1}> Done</button>
        </div>

    const One = () =>
        <div className='groundingCard' id='groundingCardOne' ref={cardRef}>
            <img className='groundingIcon' src={Taste} alt='tongue'/>
            <p className='groundingText'>Find <em>1</em> thing you can <em>taste</em> around you.</p>
            <p className='groundingTextSmall'> It doesn't have to be food. Maybe the toothpaste or minty floss. Your
                coffee or tea.</p>
            <button className='groundingButton' onClick={displayButtons}> Done</button>
        </div>

    const Extra = () =>
        <div className='groundingExtraSection' ref={cardRef}>
            <h4 className='groundingMessage'> You did it! Woohoo!</h4>
            <img className='groundingIcon' src={Yay} alt='person cheering'/>
            <div className='groundingButtonWrapper'>
                <button className='groundingButton' onClick={startGrounding}>Repeat grounding</button>
                <button className='groundingButton' onClick={Breathing}>Practice breathing</button>
            </div>
        </div>

    function startGrounding() {
        setShowExtras(false)
        setShowStartButton(false)
        setShowFive(true)
    }

    function display4() {
        setShowFour(true)
        cardRef.current.scrollIntoView();
    }

    function display3() {
        setShowThree(true)
        cardRef.current.scrollIntoView();
    }

    function display2() {
        setShowTwo(true)
        cardRef.current.scrollIntoView();
    }

    function display1() {
        setShowOne(true)
        cardRef.current.scrollIntoView();
    }

    function displayButtons() {
        setShowFive(false)
        setShowFour(false)
        setShowThree(false)
        setShowTwo(false)
        setShowOne(false)
        setShowExtras(true)
    }

    return (
        <>
            <Header/>
            <body className="groundingBody">
            <div className="groundingTitleWrapper">
                <h1 className='groundingTitle'> Ground yourself </h1>
                <h5 className='groundingSmallerTitle'> The 5-4-3-2-1 method </h5>
                <hr className='break'/>
                <p className='groundingParagraph'> Make an effort to notice the little things you might not always pay
                    attention
                    to,
                    such as the color of the flecks in the carpet or the hum of your computer.
                </p>
            </div>
            {showStartButton ? <StartButton/> : null}
            <div className='groundingCards'>
                {showFive ? <Five/> : null}
                {showFour ? <Four/> : null}
                {showThree ? <Three/> : null}
                {showTwo ? <Two/> : null}
                {showOne ? <One/> : null}
                {showExtras ? <Extra/> : null}
            </div>
            </body>
        </>
    )
}

export default Grounding;