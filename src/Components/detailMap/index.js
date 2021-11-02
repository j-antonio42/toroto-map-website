import React,{ useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import './styles.scss';

const MapDetail = ({detailCoords, initCoords}) => {

    const [viewport, setViewport] = useState({
        width: 'fit',
        height: '50vh',
        latitude: initCoords[1],
        longitude: initCoords[0],
        zoom: 15
      });

   
      return (
          <ReactMapGL
            className='toroto-detail-map'
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/j-antonio42/ckvcsc6ph0l4215sfcynk578o'
            onViewportChange={nextViewport => setViewport(nextViewport)}
           >
            {   
                detailCoords[0].map((place, index) => {
                return <Marker
                    key={index}
                    latitude={place[1]}
                    longitude={place[0]}
                    >
                    <button className='marker-btn-detail'>
                    </button>
                    </Marker> 
                })  
            }

          </ReactMapGL>
      )

}

export default MapDetail