import React,{useEffect, useState} from 'react'
import { Row } from 'reactstrap';
import BigMap from '../../Components/bigMap'
import api from '../../assets/api'
import './styles.scss';
import arrowDown from '../../assets/img/icons/chevron-down.svg'
import ProyectCard from '../../Components/projectCard'
import imgMobile from '../../assets/img/photos/header_img_mobile.png'

const Projects = () => {
    
    const [project, setProject] = useState([])

    useEffect( async () => {

        const result = await api.getAllProjects()
        console.log(result.data)
        setProject(result.data)
    
      },[])

    const moveToProyects = () => {
        window.scrollBy(0, 760);
      }


    return (
        <div className='container-fluid'>
            <div className='d-none d-sm-block'>
                <BigMap
                projectData={project}
                />
            </div>
            
            <div className='container'>
               <img src={imgMobile} className='imgMobile d-block d-sm-none'/>
               
                <div className='mobile-div d-flex d-sm-none'>
                   <h1>Somos desarrolladores de proyectos</h1>
                   <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías</p>
                   <button>PROPONER UN PROYECTO</button>
                   <h6 className='font-weight-bold'>VER LISTA COMPLETA DE PROYECTOS</h6>
                   <img src={arrowDown} onClick={moveToProyects} className='arrow-mobile' alt='mobile img'/>
                </div>
                <h1 className='title-header' >Todos nuestros proyectos</h1>
                <Row>
                    {project && project.map((item) => {
                        return  <ProyectCard
                        projectKey = {item.id}
                        projectData = {item}
                        />
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Projects