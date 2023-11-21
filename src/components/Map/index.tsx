import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import style from "./index.module.css";

export default function Map(){

  const position = {
    lat: -22.74934132187, 
    lgn: -42.860901826307746
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCzrZsyVPoMixfFf_ZUCW4RfWdTMbHjs-c"
  })

  return (
    <section className={style.mapContainer}>
      {
        isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: "100%", height: "100%"}}
              center={{
                lat: position.lat,
                lng: position.lgn
              }}
              zoom={20}
            >
              <Marker position={{
                lat: position.lat,
                lng: position.lgn
              }}
              options={{
                label: {
                  text: "Leste Telecom",
                  className: style.mapLabel
                }
              }}
              />
            </GoogleMap>
          ) : <p>Não foi possivel carregar</p>
      }
    </section>
  )
}
