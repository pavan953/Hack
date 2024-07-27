import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const MapComponent = () => {
  useEffect(() => {
    // Set the Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudG9zaGt1bWFyaGF0dGkiLCJhIjoiY2xqZmJnenM2MDA1czNrbW4wOXljcjF4aSJ9.bC1yKUYykpDMlvxNI-Y3gQ';

    // Initialize the map
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [76.9214, 15.1394],
      zoom: 10
    });

    // Dataset ID from Mapbox
    const datasetId = 'clz1l84yi0e4j1to8yoqntfxb';

    // Fetch farm locations from Mapbox dataset
    fetch(`https://api.mapbox.com/datasets/v1/santoshkumarhatti/${datasetId}/features?access_token=${mapboxgl.accessToken}`)
      .then(response => response.json())
      .then(data => {
        addMarkers(data.features);
      })
      .catch(error => console.error('Error fetching farm locations:', error));

    // Function to add markers from the provided locations
    const addMarkers = (farmLocations) => {
      farmLocations.forEach((location) => {
        const marker = new mapboxgl.Marker({ 
          color: "#4a773c" // Green color for marker
        })
        .setLngLat(location.geometry.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(location.properties.popupText))
        .addTo(map);
      });
    };

    // Function to locate the user's current location
    const locateUser = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userCoordinates = [position.coords.longitude, position.coords.latitude];
            map.flyTo({
              center: userCoordinates,
              zoom: 14
            });
            // Add a marker at the user's location
            new mapboxgl.Marker({ 
              color: "#ff0000" // Red color for user marker
            })
            .setLngLat(userCoordinates)
            .setPopup(new mapboxgl.Popup().setHTML("<strong>Your Location</strong>"))
            .addTo(map);
          }, 
          (error) => {
            console.error('Error getting location: ', error);
            alert('Unable to retrieve your location. Error: ' + error.message);
          }
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    // Add event listener to the locate button
    document.getElementById('locate-button').addEventListener('click', locateUser);

    // Cleanup function to remove map on component unmount
    return () => map.remove();
  }, []);

  return (
    <div className='bg-gray-100 h-screen'>
      {/* Button to locate the current user */}
      <button id="locate-button" className='block mx-auto my-2 p-2.5 text-lg bg-green-900 text-white border-none rounded cursor-pointer shadow-md hover:bg-green-800'>Locate Me</button>
      {/* Map container */}
      <div id="map" className='h-[calc(100vh-120px)] w-full mx-auto'></div>
    </div>
  );
};

export default MapComponent;
