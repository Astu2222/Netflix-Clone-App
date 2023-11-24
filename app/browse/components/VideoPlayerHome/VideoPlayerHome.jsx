'use client'
import React, { useState, useEffect } from 'react';
import {Button} from "@nextui-org/react";
import Link from 'next/link';


export default function VideoPlayerHome() {
    const [showVideo, setShowVideo] = useState(false);

    const startVideo = () => {
        setShowVideo(true);
    };

    useEffect(() => {
        // Usar setTimeout para activar startVideo después de 5 segundos (5000 milisegundos)
        const timeoutId = setTimeout(() => {
            const button = document.getElementById('prev'); // Reemplaza 'prev' con el ID del elemento que deseas hacer clic
            if (button) {
                button.click(); // Simular un clic en el elemento
            }
            startVideo();
        }, 6000);
        // Limpieza del temporizador al desmontar el componente
        return () => clearTimeout(timeoutId);
    }, []); // Dependencias vacías para que esto se ejecute solo una vez





// OBTENER DATOS

    
        const [datos,setDatos] = useState([])
      
        useEffect(()=>{
    
          fetch('/api/random') // Reemplaza '/api' con la URL de tu API
          .then(response => {
            // Verifica si la respuesta es exitosa (código de estado 200)
            if (!response.ok) {
              throw new Error('Error en la solicitud');
            }
            return response.json(); // Convierte la respuesta en formato JSON
          })
          .then(data => {
            // Aquí puedes trabajar con los datos obtenidos de la API
            console.log(data);
            setDatos(data)
          })
          .catch(error => {
            console.error('Error:', error);
          });
    
        },[])
      
        // Envio los datos al return como por ejemplo:
        // <ul>
        // {datos && datos.map((dato) => (
        //   <li key={dato.id}>{dato.nombre}</li>
        // ))}
        // </ul>

















    return (
        <div style={{ width: "100%", height: "100%", position:"relative", zIndex:"1" }} >


        
        <div className="serieInfo" style={{
          position:"absolute",
          bottom:0,
          left:50,
          top:380,
          zIndex:1
        }}>
          <div className="" style={{zIndex:"-1"}}>

          <img src={datos.imagenLogo} alt="" />

        { !showVideo ? (<>

          <p style={{fontSize:"24px", fontWeight:"bold", paddingTop:"20px", width:"800px"}}>{datos.descripcion}</p>

        
        </>) : null}



          

          

          
          </div>

          <Link href={`/watch/${datos.id}`}>

          <Button size="lg" style={{margin:"5px 5px 5px 0px", backgroundColor:"white", color:"black"}} >
            <img style={{width:"20px"}} src="/iconos/play.png" alt="" />
            Reproducir {datos.nombre}
          </Button>

          </Link>
          <Button size="lg" style={{margin:"5px 5px 5px 0px"}}>
            <img style={{width:"20px", filter:"invert(100)"}} src="/iconos/info.png" alt="" />  
            Más información
          </Button>

        </div>




          

            
              {showVideo ? (
                  

                    
                  <video
                      className='videoPrev' style={{height:"100vh", width:"100vw", objectFit:"cover", filter:"brightness(0.7)", objectFit:"cover"}}

                      autoPlay
                      controls={false}
                      muted={false} // Quitar el muted para habilitar el sonido
                      onEnded={() => setShowVideo(false)}
                      
                      // Controlar el ajuste del contenido del video
                      >
                      <source src={datos.videoPrev} type="video/mp4" />
                  </video>
             
                  
                    ) : (
                      <img style={{ width: "100%", height: "100vh",filter:"brightness(0.6)" }} src={datos.imagenPrev} alt="" />
                      )}


          

        </div>
    );
}