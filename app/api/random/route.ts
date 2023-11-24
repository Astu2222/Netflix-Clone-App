import { NextResponse } from "next/server";
import { series } from "../series/route";

export async function GET(request: Request) {
  // Obtener un índice aleatorio
  const randomIndex = Math.floor(Math.random() * series.length);

  // Obtener el valor de ID correspondiente al índice aleatorio
  const randomID = series[randomIndex];

  return NextResponse.json(randomID);
}
