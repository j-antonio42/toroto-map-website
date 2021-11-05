import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { CardImg, CardText,
    CardTitle, CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import api from '../../assets/api'
import ServiceBatch from '../../Components/batchDiv';
import './styles.scss'

import CollapseActivities from '../../Components/collapse';
import MapDetail from '../../Components/detailMap';
import ModalImages from '../../Components/modalImages';
import TorotoSpinner from '../../Components/spinner';
import ModalGallery from '../../Components/modalGallery';


const ProjectDetail = () => {
    
    const [ dataDetail, setDataDetail ] = useState([])
    const projectId = useParams().id

    useEffect( async() => {
        let result = await api.getProjectById(projectId)
        setDataDetail(result.data)
        console.log(result.data)
    }, []);

    const createTemplate = (details) => {
   
        const { name, location, description, images, problem, activities, impact, services } = details

        return (
            <>
      
            <img src={images[3]} className='mobile-detail d-flex d-sm-none'/>
    
        <div className='detail-card'>
            <CardImg src={images[3]} className='detail-img d-none d-sm-block'/>
            <CardBody className='detail-body'>
                <CardSubtitle tag="h5" className="location mb-2">{location}</CardSubtitle>
                <CardTitle tag="h1" className='detail-header' >{name}</CardTitle>
                <div className='service-detail row'>
              {
                services.map((item, index) => {
                  return (
                    <ServiceBatch
                        serviceKey={index}
                        service = {item}
                    />
                  )
                })
              }
              </div>
                <CardText className='project-text'>{description}</CardText>
            </CardBody>
        </div>
        <div className='problematic'>
            <h5>Problemática</h5>
            <p>{problem}</p>
        </div>
        <div className='implementation'>
            <h2>
                Implementación <ModalImages
                 cover = {images[2]}
                 textCover = {services[1]}
                 problem = {problem}
                />
                 
            </h2>
                 
            <h4 className='mb-4'>Actividades de restauración</h4>
           {
              activities.map((item, index) => {
                  return ( <CollapseActivities
                     activities = {item}
                     key={index}
                  />)
              })
           } 

        </div>
        <div className='map-div'>
            <h4 className='mb-4'>Mapa de obras</h4>
            <div className='detail-map'>
                <MapDetail
                detailCoords={details.geometry.coordinates}
                initCoords={details.geometry.coordinates[0][0]}
                />
            </div>
        </div>
        <div className='gallery-container'>
            
            <h4 className='mb-4'>Galería de imágenes</h4>
            <Row className='row-img'>
          {/*  <ModalGallery
              imgArray={images}
              problem={problem}
          />  */}
            { 
               images.map((item, index) => {
                    return (
                        <ModalImages
                        modalKey={index}
                        image ={ item}
                        problem= {problem}
                        imgArray={images}
                       />
                    )
                }) 
            }
            </Row>
        </div>
        <div className='impact-container'>
            <h4 className='mb-4'>Impacto</h4>
            <Row className='impact-data'>
               
                {
                   impact.map((item, index) => {
                       return (
                        <Col 
                            className='impact-div'
                            xs='6'
                            md='3' 
                            key={index}
                        >
                           <h1>{item.value}</h1>
                           <h4>{item.name}</h4>
                         </Col>
                       )
                   }) 
                } 
            </Row>
        </div>
        <div className='intro-div'>
            <h1>Somos desarrolladores de proyectos</h1>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button>PROPONER UN PROYECTO</button>  
         </div>
        </>
        )
    }
    
   
    return (
        <div className='container-fluid'>
            <div className='container'>

            {
               !dataDetail && <TorotoSpinner/>
            }
            {  
              Object.values(dataDetail).length > 0 &&
               createTemplate(dataDetail[0])
            }
            </div>
        </div>
    )
}

export default ProjectDetail