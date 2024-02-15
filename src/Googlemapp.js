import React from 'react'


import { GoogleMap , LoadScript , Marker} from '@react-google-maps/api';




const Googlemapp = () => {

  const item={
    // name
    name:"anas",
    Location:{
      lat:35.83877399826845, 
      Ing:10.596818360495591,
    }

  }

//style google maps 
  const containerStyle = {
    width: '500px',
    height: '500px'
  };
  
  
  const center = {
    lat: 35.83877399826845, 
    lng: 10.596818360495591
  };
  
  return (
    
  <div >
    {/* key google maps  "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" */}

    <LoadScript  googleMapsApiKey='AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg'>
      <GoogleMap mapContainerStyle={containerStyle} zoom={18} center={center}>
        <Marker key ={item.name} position={item.Location}/>
      </GoogleMap>
    </LoadScript>
  </div>
   
  )
}

export default  Googlemapp;