import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
import './styles.scss'
import ServiceBatch from '../batchDiv';

const ProyectCard = ({projectData, projectKey}) => {


  return (
    <Col xs='12' md='6' key={projectKey} >
      <Card className='project-card'>
        <CardImg className='project-img' src={projectData.images[0]} alt="Card image cap" />
        <CardBody className='project-body'>
          <CardSubtitle tag="h6" className="location mb-2">{projectData.location.slice(0,52)}</CardSubtitle>
          <div className='title-container'>
            <CardTitle tag="h2" className='project-title'  >{projectData.name}</CardTitle>
          </div>
          <CardText className='project-text'>{projectData.description.slice(0,160)}...</CardText>
           <div className='service-container row d-none d-sm-flex'>
              {
                projectData.services.map((item, index) => {
                  return (
                    <ServiceBatch
                    serviceKey={index}
                    service = {item}
                    />
                  )
                })
              }

           </div>
          
          <Link to={`/detail/${projectData.id}`}>
            <Button className='btn-detail'>VER PROYECTO COMPLETO</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProyectCard;