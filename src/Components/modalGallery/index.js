import React, {useState} from 'react';
import Modal from '../../Components/modal'
import {Col} from 'reactstrap'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import serviceLogo from '../../assets/img/icons/service_icon.svg'
import TorotoCarousel from '../carousel';
import './styles.scss'
import { useModal } from './useModal';


const ModalGallery = ({ imgArray, problem}) => {

    const [isOpen1, openModal1, closeModal1] = useModal(false)
    const [isOpen2, openModal2, closeModal2] = useModal(false)
    const [isOpen3, openModal3, closeModal3] = useModal(false)
    const [isOpen4, openModal4, closeModal4] = useModal(false)
    const [isOpen5, openModal5, closeModal5] = useModal(false)
    const [isOpen6, openModal6, closeModal6] = useModal(false)
  

    return (
        <>
        <Col xs='6' md='6' 
                className='imgs-container'>
                <img 
                onClick={openModal1}
                className='detail-images' 
                src={imgArray[0]}
                />
        </Col>
        <Col xs='3' md='3' 
            className='imgs-container'>
            <img 
            onClick={openModal2}
            className='detail-images' 
            src={imgArray[1]}
            />
        </Col>
        <Col xs='3' md='3' 
            className='imgs-container'>
            <img 
            onClick={openModal3}
            className='detail-images' 
            src={imgArray[2]}
            />
        </Col>
        <Col xs='3' md='3' 
                className='imgs-container'>
                <img 
                onClick={openModal4}
                className='detail-images' 
                src={imgArray[3]}
                />
        </Col>
        <Col xs='3' md='3' 
            className='imgs-container'>
            <img 
            onClick={openModal5}
            className='detail-images' 
            src={imgArray[4]}
            />
        </Col>
        <Col xs='6' md='6' 
            className='imgs-container'>
            <img 
            onClick={openModal6}
            className='detail-images' 
            src={imgArray[5]}
            />
        </Col>
        <Modal isOpen={isOpen1, isOpen2} closeModal={closeModal1, closeModal2}>
            <TorotoCarousel>
                {imgArray.map( (slide, index) => {
                    return (  <div className='modal-data'> 
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
            <div className='modal-data'> 
            <img 
            className='modal-image' 
            src={ imgArray[0]  }
            />
            <p
            className='modal-text'
            >{problem.slice(0, 150)}.</p>
             </div>

            </TorotoCarousel>
       
        </Modal>
            
        </>
    )
}
            
export default ModalGallery