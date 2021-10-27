import React,{ useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import ProyectCard from '../projectCard';
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
  const [ placeInfo, setPlaceInfo ] = useState({})
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


console.log(hoveredPlace)


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
          <h6 className="card-title">{hoveredPlace.location}</h6>
            <h5 className="card-title">{hoveredPlace.name}</h5>
            <p className="card-text">{`${hoveredPlace.description.slice(0,100)}...`}</p>
           </div>
         </Popup>
          ) } 
          <div className='toroto-header'>
          <h1>Somos desarrolladores de proyectos</h1>
          <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías</p>
          <button>PROPONER UN PROYECTO</button>

          </div>
    </ReactMapGL>
    
  );
}

export default BigMap