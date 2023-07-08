import React, {useContext, useState} from 'react';
import './Experience.css';
import {useHistory} from 'react-router-dom';
import {SymptomsContext} from "./ContextComponent";
import Notes from "../images/notes.png";

function Experience(props) {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString("en-US", options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    const symptoms = [
        {
            name: "Shortness of breath"
        },
        {
            name: "Heart palpitations"
        },
        {
            name: "Nausea"
        },
        {
            name: "Trembling"
        },
        {
            name: "Restlessness"
        },
        {
            name: "Weak / Lightheaded"
        },
        {
            name: "Headache"
        }
    ];


    const {/*checkboxes,*/ setCheckboxes} = useContext(SymptomsContext);
    const [notes, setNotes] = useState('');
    const [filteredSymptoms, setFilteredsymptoms] = useState([]);
    const [checkedState, setCheckedState] = useState(
        new Array(symptoms.length).fill(false)
    );
    const [showError, setShowError] = useState(false);

    let history = useHistory();

    const nextPage = () => {
        history.push('/Guidance')
        history.push('/Entries', [notes])
    }
    const Error = () =>
        <div className='errorMessage'> ⚠️ Please check off a symptom or write something in the notes ⚠️ </div>


    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((isChecked, index) => {
                if (index === position) {
                    if (isChecked) {
                        setFilteredsymptoms(filteredSymptoms.filter((symptom) => {
                            return symptom.name !== symptoms[position].name
                        }))
                    } else {
                        setFilteredsymptoms([...filteredSymptoms, {name: symptoms[position].name, state: false}])
                    }

                    return !isChecked;
                }
                return isChecked;
            }
        )
        setCheckedState(updatedCheckedState);
    }

    const handleSymptoms = () => {
        if (filteredSymptoms.length > 0 || notes !== '') {
            nextPage();
            setCheckboxes(filteredSymptoms.map(filteredSymptom => filteredSymptom.name))
        } else {
            setShowError(true)
        }
    };

    return (
        <div>
            <div className='experienceMain'>
                <div className='experienceHeader'>
                    <h3 className='experienceTitle'> {today} </h3>
                </div>
                <p className='feeling'>{props.location.state}</p>

                <div className='experiencingAndNotesWrapper'>
                    <div className='experiencing'>
                        <p className='experiencingSmallTitle'>Check off <em>all</em> the symptoms you are experiencing:
                        </p>
                        <div className="symptoms-list">
                            {symptoms.map(({name}, index) => {
                                return (
                                    <div key={index}>
                                        <div className="symptoms-list-item">
                                            <div
                                                className={checkedState[index] ? 'symptomsChecklistChecked' : 'symptomsChecklist'}>
                                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                                <input
                                                    className='checkbox'
                                                    type="checkbox"
                                                    id={`custom-checkbox-${index}`}
                                                    name={name}
                                                    value={name}
                                                    checked={checkedState[index]}
                                                    onChange={() => handleChange(index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='notes'>

                        <div className='notesTitleWrapper'>
                            <img src={Notes} className='experienceImage' alt='notes'/>
                            <p className='experiencingSmallTitleRight'><label htmlFor="notes">Anything to add?</label>
                            </p>
                        </div>
                        <textarea className='symptoms' id="notes" name="notes" required value={notes}
                                  onChange={(e) => setNotes(e.target.value)}/>
                    </div>
                </div>
                <div className='experienceSubmitWrapper'>
                    <div>
                        <button className='experienceButton' id='experienceSubmit' value="Confirm"
                                onClick={() => handleSymptoms()}> Confirm symptoms
                        </button>
                    </div>
                    {showError ? <Error/> : null}
                </div>
            </div>
        </div>
    );
}

export default Experience;
