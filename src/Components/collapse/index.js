import React, { useState } from 'react';
import { Collapse} from 'reactstrap';
import './styles.scss'
import arrow from '../../assets/img/icons/chevron-down.svg'



const CollapseActivities = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { name, description } = props.activities

    return (
     <div className='collapse-div'>
        <div 
            className='activity-title'
            onClick={toggle}>
            <h5>{name}</h5>
            <img 
              src={arrow} 
              className={`${isOpen && 'toggle-arrow'}`}/>
        </div>
        <Collapse isOpen={isOpen} >
            <p>{description}</p>
        </Collapse>
    </div>
    )
}

export default CollapseActivities