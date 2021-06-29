export interface PayloadPrima {
  success: boolean;
  codigo: number;
  descripcion: string;
  respuesta: Respuesta;
}

export interface Respuesta {
  fianzaPrimas: fianzaPrimas[];
}

export interface fianzaPrimas {
  fianza: string;
  movimiento: string;
  fiado: string;
  antiguedad: string;
  diasVencimiento: string;
  importe: string;
  color: string;
  ramo: string;
  gestion: string;
  fechaOp: string;
}
