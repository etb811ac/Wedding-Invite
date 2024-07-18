import './modal.scss'
import { useEffect, useState } from 'react';

//components
import SongForm from './SongForm';

//data
import {CARDS} from '../data.js'


export default function Modal({ onClose, index }) {
    const [show, setShow] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 50);
    }, []);

    const closePopup = () => {
        setShow(false);
        setTimeout(()=> {
            onClose(false)
        },500)
    }

    return (
        <div className={show ? ("modal-container opened") : ("modal-container")}>
            <button className='close-btn' onClick={closePopup}>X</button>
            <div className="modal">
                {index === 0 ? (
                    <SongForm />
                ) : (
                    <>
                        <div className="title">
                            {CARDS[index].title}
                        </div>

                        <div className="body">
                            {CARDS[index].modal.body.map(el => {
                                console.log(el)
                                return(
                                    <p>{el.p}</p>
                                )
                            })}
                        </div>
                        {CARDS[index].modal.colors?(
                            <div className="color-container">
                                {CARDS[index].modal.colors.map(cl => {
                                return(
                                    <div className="color" style={{backgroundColor:cl.color}}></div>
                                )
                                })}
                            </div>
                        ):undefined}
                    </>
                )}

            </div>
        </div>
    )
}