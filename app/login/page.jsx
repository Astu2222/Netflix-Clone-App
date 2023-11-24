import React from 'react'
import './login.scss'
import Link from 'next/link'
import { Card } from '@nextui-org/card'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'

export default function Login() {

  return (
    <div className='login'>
    <div className="darkShadow">

    <header className="navbar">
        <Link href="/">
            <img style={{width:"200px", height:"70px"}} src="/logo.png" alt="" />
        </Link>
    </header>

    <main className='contenido'>
        <Card className='card'>
            <h1>Inicia sesión</h1>
            <p>(Puede ingresar con cualquier usuario)</p>

            <div className="colorEmail" 
            style={{backgroundColor:"green", paddingBottom:"3px", borderRadius:"20px 20px 18px 18px"}}>
                <Input className="input" type='email' label='Email o numero de telefono'></Input>
            </div>

            <div className="colorContraseña" 
            style={{backgroundColor:"green", paddingBottom:"3px", borderRadius:"20px 20px 18px 18px"}}>
                <Input className="input" type='password' label='Contraseña'></Input>
            </div>

            <Link href="/browse" style={{ display:"flex", width:"100%", justifyContent:"center"}}>
                <Button className='botonRojo'>Iniciar sesión</Button>
            </Link>

            <div className="opciones">

            <div className="row1">
              <Checkbox> Recuérdame </Checkbox>
              <Link href="/">
                <p>¿Necesitas ayuda?</p>
              </Link>
            </div>

            <div className="row2">
              
                    <Link href="/">
                        <p>¿Primera vez en Netflix?</p>
                    </Link>
                    <Link href="/">
                        <p style={{marginLeft:"5px", color:"red"}}>Suscríbete ahora.</p>
                    </Link>
              

            </div>



            <div className="row3">
                <p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. 
                    
                <Link href="/" style={{color:"#51d1f6", marginLeft:"4px"}}>
                Más info.
                </Link>
                    
                    </p>
            </div>

            </div>
        </Card>
    

    </main>

        <footer>
            <div className="preguntas">
                <p>¿Preguntas? Llama al 0800-345-1593</p>
            </div>

        <div className="contenidoFooter">

        <div className="col1">
            <Link href="/">
                <p>Preguntas Frecuentes</p>
            </Link>

            <Link href="/">
                <p>Preferencias de cookies</p>
            </Link>
        </div>

        <div className="col2">
        <Link href="/">
                <p>Centro de ayuda</p>
            </Link>

            <Link href="/">
                <p>Información corporativa</p>
            </Link>
        </div>

        <div className="col3">
            <Link href="/">
                <p>Términos de uso</p>
            </Link>
        </div>

        <div className="col4">
            <Link href="/">
                <p>Privacidad</p>
            </Link>
        </div>

        </div>

        </footer>

    </div>
    </div>
  )
}
