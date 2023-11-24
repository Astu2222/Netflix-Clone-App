'use client'
import { Button } from '@nextui-org/button'
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page({params}) {






    const [datos,setDatos] = useState([])

  
    useEffect(()=>{

      fetch(`/api/series/${params.id}`) // Reemplaza '/api' con la URL de tu API
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
  








  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const router = useRouter()

  return (
    <>
    <div className="" style={{position:"relative"}}>

    <div className="" style={{position:"absolute", zIndex:"1", width:"100%", textAlign:"center", backgroundColor:"#00000090", height:"50px", display:"flex", justifyContent:"center",
  alignItems:"center", fontWeight:"lighter"}} >
    <h1 style={{display:"flex"}}>ESTAS VIENDO: <p style={{fontWeight:"bold", marginLeft:"8px"}}>{datos.nombre}</p></h1>

    <div className="" style={{position:"absolute", zIndex:"3", filter:"invert(100)", width:"50px", left:30}}>
      <Link href="/browse">

      <img src="/reproductor/atras.png" alt="" />

      </Link>
    </div>

    </div>


    {datos.capitulo && (
        <video
          className='videoWatch'
          style={{ height: "100vh", objectFit: "cover", filter: "brightness(0.7)" }}
          width="100%"
          height="100%"
          autoPlay
          controls={true}
          muted={false}
          onEnded={onOpen}
        >
          <source src={datos.capitulo} type="video/mp4" />
        </video>
      )}

    </div>


    
    <div className="" style={{position:"absolute", zIndex:"2"}}>

    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Felicidades terminaste de ver {datos.nombre}</ModalHeader>
              <ModalBody>
                <p> 
                  Gracias por usar GetFlex te recomendamos la siguiente serie

                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={() =>{
                   onClose();
                   router.push("/browse");}}>
                  Volver a Home
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
   

    
    </>
  )
}
