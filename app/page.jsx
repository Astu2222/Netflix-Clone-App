'use client'
import Image from 'next/image'
import Link from 'next/link'
import './home.scss'
import { Button } from '@nextui-org/button'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { useMemo, useState } from 'react';
import {Input} from "@nextui-org/input";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function Home() {

  const [selectedKeys, setSelectedKeys] = useState(new Set(["Idiomas"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
    
    <div className="home">

    <div className="darkShadow">


    <header>

      <div className="navbar">

        <Link href="/">
            <img style={{width:"200px", height:"70px"}} src="/logo.png" alt="" />
        </Link>

      <div className="botones" >

      <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
                className="capitalize"
              >
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="es">Español</DropdownItem>

            </DropdownMenu>
          </Dropdown>

              <Link href="/login" style={{margin:"0px"}}>
              <Button className='botonRojo'>Iniciar sesión</Button>
              </Link>

      </div>

      </div>

      <div className="contenidoHome">
      <h1>Películas y series ilimitadas y mucho más</h1>
      <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
      <h3>¿Quieres ver Getflex ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Getflex.</h3>
      </div>

      <div className="membresia">
      <Input className='input' type="email" label="Email" />
      <Button className='botonRojo' style={{fontWeight:"bold"}}>COMENZAR</Button>
      </div>


    </header>
    

    </div>



    <main>

      

      <div className="banner">
        <div className="contenido">
          <h2>Disfruta en tu TV</h2>
          <h3>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</h3>
        </div>
        <img src="./banner/1.png" alt="" />
      </div>

      <div className="banner">
        <img src="./banner/2.jpg" alt="" />
      <div className="contenido">
        <h2>Descarga tus series para verlas offline</h2>
        <h3>Guarda tu contenido favorito y tendrás siempre algo para ver.</h3>
      </div>
      </div>

      <div className="banner">
        <div className="contenido">
          <h2>Disfruta donde quieras</h2>
          <h3>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV.</h3>
        </div>
        <img src="./banner/3.png" alt="" />
      </div>

      <div className="banner">
        <img src="./banner/4.png" alt="" />
      <div className="contenido">
        <h2>Crea perfiles para niños</h2>
        <h3>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</h3>
      </div>
      </div>

      <div className='banner' style={{display:"flex",flexDirection:"column"}}>

      <h2>Preguntas frecuentes</h2>

      <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="¿Qué es Getflex?">
        <p>Getflex es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.</p>
        <p>Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!</p>
      </AccordionItem>

      <AccordionItem key="2" aria-label="Accordion 2" title="¿Cuánto cuesta Getflex?">
        <p>Disfruta Getflex en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 1.649 hasta $ 3.999 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.</p>
      </AccordionItem>

      <AccordionItem key="3" aria-label="Accordion 3" title="¿Dónde puedo ver Getflex?">
        <p>Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Getflex para ver contenido al instante a través de Getflex.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Getflex, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos</p>
        <p>Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Getflex contigo adonde sea.</p>
      </AccordionItem>

      <AccordionItem key="4" aria-label="Accordion 3" title="¿Cómo cancelo?">
        <p>Getflex es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.</p>
      </AccordionItem>

      <AccordionItem key="5" aria-label="Accordion 3" title="¿Qué puedo ver en Getflex?">
        <p>Getflex tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.</p>
      </AccordionItem>

      <AccordionItem key="6" aria-label="Accordion 3" title="¿Es bueno GetFlex para los niños?">
        <p>La experiencia de Getflex para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.</p>
        <p>Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.</p>
      </AccordionItem>

    </Accordion>

    <h3 style={{margin:"10px"}}>¿Quieres ver Getflex ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Getflex.</h3>

    <div className="membresia" style={{margin:"10px"}}>
      <Input className='input' type="email" label="Email" />
      <Button className='botonRojo' style={{fontWeight:"bold"}}>COMENZAR</Button>
      </div>

      </div>










    </main>


    </div>
  )
}
