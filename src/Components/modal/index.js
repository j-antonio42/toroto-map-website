import React from 'react';
import './styles.scss'


const Modal = ({children, isOpen, closeModal}) => {

   const handleModal = (event) => {
       event.stopPropagation()
   }


    return (
     <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
         <div className='modal-container card' onClick={handleModal} >
             <button 
             className='modal-close card'
             onClick={closeModal}
             >X</button>
             {children}
         </div>
     </div>
    )
}

export default Modal