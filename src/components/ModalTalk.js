import React, {useRef, useEffect, useCallback} from 'react';
import styled from 'styled-components'
import talk from '../images/talk.jpg';
import { MdClose } from 'react-icons/md'
import data from "./data/data.json";
import './Guidance.css';

const Background = styled.div`
    width: 1900px;
    height: 1200px;
    margin: 0;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 2700px) {
        width: 2700px;
        height: 1500px;
        }
    @media (max-width: 2000px) {
        width: 2000px;
        height: 1500px;
        }
    @media (max-width: 1700px) {
        width: 1700px;
        height: 1200px;
        }
    @media (max-width: 1050px) {
        width: 1050px;
        height: 1200px;
        }
`

const ModalWrapper = styled.div`
    width: 1200px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: rgba(232, 236, 255, 0.9);
    color: #000;
    font-size: 18.5px;
    position: relative;
    display: grid;
    grid-template-columns: 0.5fr 3.5fr;
    z-index: 10;
    border-radius: 20px;
    @media (max-width: 1700px) {
        width: 900px;
        height: 550px;
      }
    @media (max-width: 1600px) {
        margin-left: -200px;
        position: relative;
    }
    @media (max-width: 1400px) {
        margin-left: -500px;
    }
    @media (max-width: 1300px) {
        margin-left: -700px;
    }
    @media (max-width: 1200px) {
        width: 800px;
        height: 400px;
    }
    @media (max-width: 1050px) {
        margin-left: 0px;
        margin-bottom: 400px;
      }
    @media (max-width: 1000px) {
        width: 400px;
        height: 900px;
        display: grid;
        grid-template-columns: 0.5fr;
    }
    @media (max-width: 900px) {
        margin-left: -150px;
    }
    @media (max-width: 800px) {
        margin-left: -250px;
    }
    @media (max-width: 700px) {
        margin-left: -350px;
    }
    @media (max-width: 600px) {
        margin-left: -500px;
    }
    @media (max-width: 500px) {
        margin-left: -600px;
    }
    @media (max-width: 444px) {
        width: 250px;
        height: 900px;
    }
    @media (max-width: 400px) {
        margin-left: -700px;
    }
`

const ModalImg = styled.img`
    margin: 80px 50px;
    width: 330px;
    height: 450px;
    border-radius: 50%;
    border: none;
    @media (max-width: 1700px) {
        margin: 120px 50px;
        width: 220px;
        height: 300px;
    }
    @media (max-width: 1200px) {
        margin: 50px 50px;
        width: 220px;
        height: 300px;
    }
    @media (max-width: 1000px) {
        margin-top: 85px;
        margin-left: 85px;
        margin-bottom: -100px;
    }
    @media (max-width: 444px) {
        margin-top: 50px;
        margin-left: 50px;
        margin-bottom: 20px;
        width: 150px;
        height: 200px;
    }
`

const ModalContent = styled.div`
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141fa0;
    font-size: 24px;

        button {
            padding: 10px 24px;
            background: #141fa0;
            color: #fff;
            border: none;
        }
    @media (max-width: 1700px) {
        font-size: 18px;
        }
    @media (max-width: 1200px) {
        font-size: 14px;
        }
    @media (max-width: 1000px) {
        padding-left: 50px;
        padding-right: 0px;
        display: flex;
        flex-direction: row;
        margin-top: -150px;
    }
    @media (max-width: 444px) {
        margin-top: -150px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

const CloseModalButton = styled(MdClose)`
        cursor: pointer;
        position: absolute;
        color: #141fa0;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 32px;
        padding: 0;
        z-index: 10;
`

export const ModalTalk = ( { showModal, setShowModal} , props) => {

    const modalRef = useRef()

    // closes box when clicking on the background
    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false)
        }
    };

    // closes box when pushing ESC
    const pressEsc = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect (
        () => {
            document.addEventListener('keydown', pressEsc);
            return () => document.removeEventListener('keydown', pressEsc);
        },
        [pressEsc]
    );



    return(
        <>
{  showModal ? 
        <Background ref={modalRef} onClick={closeModal}>
            <ModalWrapper>
                <ModalImg src={talk} alt='talk'/>
                <ModalContent>
                    {data[6].TalkText1}<br></br>
                    {data[6].TalkText2}<br></br>
                    {data[6].TalkText3}<br></br>
                    {data[6].TalkText4}<br></br>
                    {data[6].TalkText5}<br></br>
                    {data[6].TalkText6}<br></br>
                    {data[6].TalkText7}
                </ModalContent>
                <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
                />
            </ModalWrapper>
        </Background>
            : null
}
        </>
    )
}

export default ModalTalk;