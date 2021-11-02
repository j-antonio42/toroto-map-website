import React from 'react';
import './styles.scss'
import serviceLogo from '../../assets/img/icons/service_icon.svg'
import { Col } from 'reactstrap';

const ServiceBatch = ({service, serviceKey}) => {
   

  return (
    
          <Col className='project-batch' key={serviceKey} xs='6' md='6' >
              <div 
                className='batch'>
                  <img src={serviceLogo}/> 
                  <p className='m-0 batch-text'>{ service.slice(0,45)}</p>
                </div>
            </Col>
       
  );
};

export default ServiceBatch;