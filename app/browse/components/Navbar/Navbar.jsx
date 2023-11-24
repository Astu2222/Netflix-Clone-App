'use client'
import React,{useState, useEffect} from 'react'
import './Navbar.scss'
import Link from 'next/link'
import { motion } from 'framer-motion';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClassName = `navbar ${scrolled ? 'scrolled' : ''}`;


  return (
    <div
    
  
    className={navbarClassName}>

      <div className="left">

      <img className="logo" src="/logo.png" alt="" />
      <Link className="link" href="/">Inicio</Link>
      <Link className='link' href="/">Series</Link>
      <Link className='link' href="/">Películas</Link>
      <Link className='link' href="/">Novedades populares</Link>
      <Link className='link' href="/">Mi lista</Link>
      <Link className='link' href="/">Explora por idiomas</Link>

      </div>


      <div className="right">
      <img className="icono" src="/iconos/busqueda.png" alt="" />
      <Link className="link" href="/">Niños</Link>

      <motion.div className=""
      
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
      }}
      
      >
      <img style={{width:"45px", borderRadius:"10px"}} src="/usuarios/1.png" alt="" />
      </motion.div>
      </div>



    </div>
  )

}

export default Navbar