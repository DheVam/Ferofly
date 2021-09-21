import React,{Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100vw',
    height: '400px',

  };

  export class MapContainer extends Component {
    render() {
      return (
        <div style={mapStyles}>

          <Map
            google={this.props.google}
            zoom={8}
            
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
          </Map>
        </div>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCbWhteOqVTt2eNWbkhGeq8KxE-Q3w3vcg'
  })(MapContainer);