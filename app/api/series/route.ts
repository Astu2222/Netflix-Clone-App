import { NextResponse } from "next/server";

export const series = [{
    id: 1,
    nombre: "Evangelion",
    descripcion: "Quince años después del Segundo Impacto, Shinji Ikari se une a NERV, el grupo de jóvenes pilotos formado por su padre para combatir a los monstruosos Ángeles.",
    imagenPrev: "/video/Evangelion/prev.webp",
    imagenLogo: "/video/Evangelion/logo.webp",
    videoPrev : "/video/Evangelion/video.mp4",
    capitulo: "/video/Evangelion/capitulos/1.mp4"
},
{
    id: 2,
    nombre: "Kakegurui",
    descripcion: "Yumeko Jabami es una gran apostadora y planea limpiar Hyakkaou, una academia privada que evalúa a los estudiantes solo por sus habilidades en los juegos de azar.",
    imagenPrev: "/video/Kakegurui/prev.webp",
    imagenLogo: "/video/Kakegurui/logo.webp",
    videoPrev : "/video/Kakegurui/video.mp4",
    capitulo: "/video/Kakegurui/1.mp4"
},
{
    id: 3,
    nombre: "La Casa de Papel",
    descripcion: "Un grupo de ocho ladrones, cada uno con un nombre en clave inspirado en ciudades, lleva a cabo un elaborado atraco a la Real Casa de la Moneda de España, donde imprimen dinero mientras mantienen rehenes y ocultan sus identidades detrás de máscaras de Salvador Dalí.",
    imagenPrev: "/video/La_Casa_de_papel/prev.webp",
    imagenLogo: "/video/La_Casa_de_papel/logo.png",
    videoPrev : "/video/La_Casa_de_papel/video.mp4",
    capitulo: "/video/La_Casa_de_papel/1.mp4"
},
{
    id: 4,
    nombre: "Criatura",
    descripcion: "En este desgarrador drama de época, Taner Olmez (<<The Protector>>) y Sifanur Gul (<<El sastre>>) interpretan a dos novios de la infancia que luchan por estar juntos.",
    imagenPrev: "/video/Criatura/prev.webp",
    imagenLogo: "/video/Criatura/logo.webp",
    videoPrev : "/video/Criatura/video.mp4",
    capitulo: "/video/Criatura/video.mp4"
},
{
    id: 5,
    nombre: "ÉLITE",
    descripcion: "Tres jóvenes de la clase obrera asisten a una de las escuelas privadas más exclusivas de España, donde el choque con los hijos de la élite acaba en una tragedia.",
    imagenPrev: "/video/ÉLITE/prev.webp",
    imagenLogo: "/video/ÉLITE/logo.webp",
    videoPrev : "/video/ÉLITE/video.mp4",
    capitulo: "/video/ÉLITE/video.mp4"
},

{
    id: 7,
    nombre: "PUNTO CIEGO",
    descripcion: "Siguiendo las pistas ocultas, en los enigmáticos tatuajes de una amnésica, el agente del FBI Kurt Weller se abre paso en la investigación de una gran cospiración.",
    imagenPrev: "/video/Punto_Ciego/prev.webp",
    imagenLogo: "/video/Punto_Ciego/logo.webp",
    videoPrev : "/video/Punto_Ciego/video.mp4",
    capitulo: "/video/Punto_Ciego/video.mp4"
}]

export async function GET(request:Request) {
    return NextResponse.json(series)
}