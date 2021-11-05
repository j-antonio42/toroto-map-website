import React,{ useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import arrowDown from '../../assets/img/icons/chevron-down.svg'
import './styles.scss';

function BigMap(props) {

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 21.50951,
    longitude: -104.89569,
    zoom: 4.4
  });

  const [ hoveredPlace, setHoveredPlace ] = useState(null)
  const projectInfo = props.projectData ? props.projectData : []

  const points = projectInfo.map( place => ({
    location: place.location,
    id: place.id,
    name: place.name,
    description: place.description,
    coordinates: [
      place.geometry.coordinates[0][0]
    ],
    images: place.images 
  }))

  const moveToProyects = () => {
    window.scrollBy(0, window.innerHeight);
  }

  return (
    
    <ReactMapGL
      className='toroto-map'
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/j-antonio42/ckv7mw7jh8qvt14mhbru4sctu'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      { points.length > 0 &&

         points.map((place) => {
        return <Marker
         key={place.id}
         latitude={place.coordinates[0][1]}
         longitude={place.coordinates[0][0]}
        >
        <button 
        className='marker-btn' 
        onMouseOver={() => {setHoveredPlace(place)}}
        onMouseOut={() =>{setHoveredPlace(null)}}
        >
        </button>
       </Marker>
      })  }

      { hoveredPlace && (
         <Popup   
         className='popup-project'
         closeButton={false}
         latitude={hoveredPlace.coordinates[0][1]}
         longitude={hoveredPlace.coordinates[0][0]}
         >
           <div className='card place-card' >
              <img className="card-img-top" src={hoveredPlace.images[2]} alt="some place"/>
              <div className='place-body'>
                <h6 className="card-title">{hoveredPlace.location.slice(0,52)}</h6>
                  <h5 className="card-title">{hoveredPlace.name}</h5>
                  <p className="project-text">{`${hoveredPlace.description.slice(0,100)}...`}</p>
              </div>
           </div>
         </Popup>
          ) } 
          <div className='toroto-header'>
            <h1>Somos desarrolladores de proyectos</h1>
            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías</p>
            <button>PROPONER UN PROYECTO</button>
          </div>
          <div className='see-projects'>
            <h6 className='font-weight-bold'>VER LISTA COMPLETA DE PROYECTOS</h6>
     
            <img src={arrowDown} onClick={moveToProyects}  className='arrow-desktop' alt='desktop img'/>
           
            
          </div>
    </ReactMapGL>
    
  );
}

export default BigMap