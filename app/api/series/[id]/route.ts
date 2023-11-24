import { NextResponse } from "next/server";
import { series } from "../route";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const serieID = parseInt(params.id, 10); // Convierte el ID de los parámetros en número

    const serieEncontrada = series.find((serie) => serie.id === serieID); // Busca la serie por ID

    if (serieEncontrada) {
        return NextResponse.json(serieEncontrada);
    } else {
        return NextResponse.json({ mensaje: "Serie no encontrada" }, { status: 404 });
    }
}