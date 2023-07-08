import React from 'react';
import data from "./data/data.json";
import Nothing from '../images/nothing.png';

function Entry(props) {

    return (
        <div>
            <h3 className='entriesTitle'>{data[props.number].Date}</h3>
            <h4 className='entriesTitle'>{data[props.number].Feeling}</h4>
            <div className='experiencingAndNotesWrapper' id='entriesCarouselWrapper'>
                <div className='entriesNotes'>
                    <p className='entriesCarouselTitle'>Experiencing:</p>
                    {data[props.number].Experiencing === "" ?
                        <div className='entryImgWrapper'><img src={Nothing} alt="nothing" className='entryImage'/>
                            <p className='entryMessage'> Nothing to show here! </p></div> :
                        <div className='entriesSymptoms'> {data[props.number].Experiencing} </div>}
                </div>
                <div className='entriesNotes'>
                    <p className='entriesCarouselTitle'>Notes:</p>
                    {data[props.number].Notes === "" ?
                        <div className='entryImgWrapper'><img src={Nothing} alt="nothing" className='entryImage'/>
                            <p className='entryMessage'> Nothing to show here! </p></div> :
                        <div className='entriesSymptoms'> {data[props.number].Notes} </div>}
                </div>
            </div>
        </div>

    );
}

export default Entry;