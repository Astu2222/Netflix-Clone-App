'use client'
import { useState, useEffect } from 'react';
import './browse.scss'
import { Button } from '@nextui-org/button'
import VideoPlayerHome from './components/VideoPlayerHome/VideoPlayerHome'
import FavsCards from './components/FavsCards/FavsCards'
import { Card } from '@nextui-org/card';
import Link from 'next/link';
import Navbar from '../browse/components/Navbar/Navbar'
import { motion } from 'framer-motion';


export default function page() {

  const [triggerUsuario, setTriggerUsuario] = useState(false)

  const handleUsuario = () => {
    setTriggerUsuario(true)
  }

  const [datos,setDatos] = useState([])
  
    useEffect(()=>{

      fetch('/api/series') // Reemplaza '/api' con la URL de tu API
      .then(response => {
        // Verifica si la respuesta es exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json(); // Convierte la respuesta en formato JSON
      })
      .then(data => {
        // Aquí puedes trabajar con los datos obtenidos de la API
        setDatos(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });

    },[])
  
    // Envio los datos al return como por ejemplo:
    

    



























  return (
    <>

    {triggerUsuario ? (<>

    
    <Navbar/>

    <main style={{backgroundColor:"#202020", width:"100%", height:"100vh"}}>

   
    <VideoPlayerHome style={{width:"100%", height:"100%"}}/>
    <FavsCards/>

    
    <div style={{paddingTop:"280px", backgroundColor:"#101010"}}>


    <h1 style={{fontSize:"25px", fontWeight:"bold", marginLeft:"35px"}}>Todas las series de Getflex</h1>

    <div className="contenedorCards" style={{display:"flex", flexWrap:"wrap", width:"100%", backgroundColor:"#101010", justifyContent:"center", alignItems:"center"}}>

    {datos && datos.map((dato) => (<>
    
      <Card style={{width:"20%", margin:"30px", display:"flex", justifyContent:"center", alignItems:"center"}} key={dato.id}>
        <Link style={{}} href={`watch/${dato.id}`}> 
        <img src={dato.imagenPrev} alt="" style={{width:"100%", objectFit:"cover"}} />
        </Link>
      </Card>
    
    </>
    ))}

    </div>


    </div>

    </main>


    </>) : null }






























    {!triggerUsuario ? (<>
        <div className="perfil">
        <h1>¿Quién está viendo ahora?</h1>
        <div className="perfiles">
            <div className="usuario" onClick={handleUsuario}>
            <img src="/usuarios/1.png" alt="" />
            <h2>Nahuel</h2>
            </div>
            
            <div className="agregarUsuario">
            <img src="/usuarios/mas.png" alt="" />
            </div>
        </div>
        <Button>Administrar perfiles</Button>
    </div>
    
    </>) : null }
    </>
  )

}
