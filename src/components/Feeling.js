import React, {useContext, useState} from "react";
import {useHistory} from 'react-router-dom';
import './Feeling.css';
import Neutral from '../images/meh.png'
import Bad from '../images/sad.png'
import Worst from '../images/crying.png'
import Good from '../images/happy.png'
import Best from '../images/relax.png'
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import {useMediaQuery} from "@mui/material";
import {FeelingContext} from "./ContextComponent";

const Feeling = (props) => {

    const {/*feel,*/ setFeel} = useContext(FeelingContext);

    const isMobile = useMediaQuery('(max-width : 650px)')

    const [emoji, setEmoji] = useState(Neutral)
    const [feeling, setFeeling] = useState("I'm feeling ok.");

    let history = useHistory();

    const submit = () => {
        history.push('/Experience', [feeling])
    }

    const handleFeeling = (event) => {
        event.preventDefault();
        submit();
        setFeel(feeling)
    }

    const valuetext = (value) => {
        return value
    }

    const changeEmoji = (event, value) => {
        if (value <= 20) {
            setEmoji(Worst)
            setFeeling("I feel really bad.")
        } else if (value <= 40 && value > 20) {
            setEmoji(Bad)
            setFeeling("I'm not that great.")
        } else if (value <= 60 && value > 40) {
            setEmoji(Neutral)
            setFeeling("I'm feeling ok.")
        } else if (value <= 80 && value > 60) {
            setEmoji(Good)
            setFeeling("I'm feeling good.")
        } else if (value <= 100 && value > 80) {
            setEmoji(Best)
            setFeeling("I'm feeling great!")
        }
    }

    return (
        <div className='feelingBody'>
            <div className='feelingPageWrapper'>
                <h2 className='feelingTitle'> How are you feeling today {props.location.state}? </h2>
                <div className='feelingWrapper'>
                    <div className='feelingEmojiWrapper'>
                        <img className='feelingIcon' src={emoji} alt='smiley'/>
                    </div>

                    <Stack className='stack' sx={isMobile ? {height: 10, width: 250} : {height: 300}} spacing={1}
                           direction="row">
                        <Slider
                            aria-label="Temperature"
                            orientation={isMobile ? "horizontal" : "vertical"}
                            getAriaValueText={valuetext}
                            defaultValue={30}
                            onChange={changeEmoji}
                            sx={{
                                color: '#04539a'
                            }}
                        />
                    </Stack>
                </div>
                <div className='feelingSubmitWrapper'>
                    <input type="submit" className='feelingSubmit' required value={feeling}
                           onClick={(event) => handleFeeling(event)}/>
                </div>
            </div>
        </div>
    )
}

export default Feeling;
