/**
 * Created by bowenjiang on 10/24/17.
 */
import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';
import Marker from './Marker';
import InfoWindow from './InfoWindow';

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace:{},
            buildings:[
                {
                    buildingName: "Metropolitan College",
                    address: "",
                    lat: 42.3504, lng: -71.1076,
                    fountains:[
                        {
                            floor:1,
                            description: "Next to room 1xx"
                        },
                        {
                            floor: 3,
                            description: "Next to room 3xx"
                        }
                    ]
                },
                {
                    buildingName: "College of Art and Science",
                    address: "",
                    lat: 42.3503, lng: -71.1049,
                    fountains:[
                        {
                            floor:1,
                            description: "Next to room 1xx"
                        },
                        {
                            floor: 3,
                            description: "Next to room 3xx"
                        }
                    ]
                },
                {
                    buildingName: "College of Communication",
                    address: "",
                    lat: 42.3489, lng: -71.1025,
                    fountains:[
                        {
                            floor:1,
                            description: "Next to room 1xx"
                        },
                        {
                            floor: 3,
                            description: "Next to room 3xx"
                        }
                    ]
                }
            ]
        }
    }

    onMarkerClick(props, marker, e){
        console.log("Marker Clicked!");
    };

    render(){
        const style={
            width: '90vw',
            height: '90vh'
        };

        return(
            <div style={style}>
                <Map google={this.props.google}>
                    <Marker
                        buildings={this.state.buildings}
                        onClick={this.onMarkerClick}
                    />
                    <InfoWindow>

                    </InfoWindow>
                </Map>

            </div>
        )

    }

}









export default GoogleApiWrapper({
    apiKey: "AIzaSyBnCsQN7SqbCBzshFOwgxhXN4aa7JHtbA8"
})(MapContainer)