import React, {useState} from 'react';
import Modal from '../../Components/modal'
import {Col} from 'reactstrap'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import serviceLogo from '../../assets/img/icons/service_icon.svg'
import TorotoCarousel from '../carousel';
import './styles.scss'


const ModalImages = ({image, problem, cover, textCover, imgArray, modalKey}) => {

    const[isOpen, setIsOpen]= useState(false)

    const openModal = () => {
        setIsOpen(true)  
    }
    
    const closeModal = () => {
        setIsOpen(false)
    }


    return (
        <>
           { image ? <Col xs='4' md='4' key={modalKey}
                className='imgs-container'>
                <img 
                onClick={openModal}
                className='detail-images' 
                src={image}
                />
            </Col> :  
             <BsFillQuestionCircleFill
              onClick={openModal}
             className='question'
           /> 
          
            }
            <Modal 
              isOpen={isOpen}
              closeModal={closeModal}
             
              > 
             
             {  
              image ? 
               
                <TorotoCarousel  modalKey={modalKey}>
                    { imgArray.map( (slide, index) => {

                    return ( 
                        <div className='modal-data' key={index}> 
                    <img 
                    className='modal-image' 
                    src={ slide  }
                    />
                    <p
                    className='modal-text'
                    >{problem.slice(0, 150)}.</p>
                     </div>

                    )
                })}
                </TorotoCarousel>
             : 

                <div className='card place-card' >
                    <img className="card-img-top d-none d-sm-block" src={cover} alt="some place"/>
                    <div className='modal-body'>
                        <div className='batch-modal'>
                            <img src={serviceLogo}/> 
                            <h3 className='card-title'>{textCover }</h3>
                        </div>
                        <h5 className="modal-title">{problem.slice(0, 284)}.</h5>
                        <p className="modal-p-text">??C??mo lo hacemos?</p>
                        <ul>
                            <li>{problem.slice(0, 74)}</li>
                            <li>{problem.slice(0, 74)}</li>
                            <li>{problem.slice(0, 74)}</li>
                            <li>{problem.slice(0, 74)}</li>
                        </ul>
                        <div className='propose-btns'>
                            <button className='propose-btn'>PROPONER UN PROYECTO</button>  
                            <button className='see-btn'>VER LOS PROYECTOS</button>  
                        </div>
                    </div>
                 </div>

            }
            </Modal>
        </>
    )
}

export default ModalImages