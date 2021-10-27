import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './styles.scss'

const ProyectCard = (props) => {

  //const [ProjectKey] = props
  //const [location, name, description, images] = props.projectData

  return (
    <Col xs='12' md='6' key={props.projectKey} >
      <Card>
        <CardImg top width="100%" src={props.projectData.images[1]} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 ">{props.projectData.location}</CardSubtitle>
          <CardTitle tag="h5">{props.projectData.name}</CardTitle>
          <CardText>{props.projectData.description}</CardText>
          <Button>VER PROYECTO COMPLETO</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProyectCard;