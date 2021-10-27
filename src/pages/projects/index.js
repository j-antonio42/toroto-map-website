import React,{useEffect, useState} from 'react'
import { Row } from 'reactstrap';
import BigMap from '../../Components/bigMap'
import api from '../../assets/api'
import './styles.scss';
import ProyectCard from '../../Components/projectCard'

const Projects = () => {
    
    const [project, setProject] = useState([])

    useEffect( async () => {

        const result = await api.getAllProjects()
        console.log(result.data)
        setProject(result.data)
    
      },[])


    return (
        <div className='container-fluid'>
             <BigMap
             
             projectData={project}
             />
            <div className='container'>
                <h1 className='title-header'>Todos nuestros proyectos</h1>
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