import { Component, OnInit } from '@angular/core';
import { GetPrimaFacade } from '../../../store/facades/prima/get-primia.facade';

@Component({
  selector: 'prima-pages',
  templateUrl: './prima-pages.component.html',
  styleUrls: ['./prima-pages.component.scss'],
})
export class PrimaPagesComponent implements OnInit {
  /* datos en duro dado que la conexion al servicio esta pendiente */
  dataSource: any[] = [
    {
      fianza: '1954-0000',
      movimiento: 'Expedicion',
      fiado: 'AGROGEN SA DE CV',
      antiguedad: '200',
      diasVencimiento: '92',
      importe: '200000',
      color: 'amarillo',
      ramo: '3',
      gestion: '1',
      fechaOp: '01/01/2020',
    },
    {
      fianza: '8524-0000',
      movimiento: 'Expedicion',
      fiado: 'DOMANI SA DE CV',
      antiguedad: '150',
      diasVencimiento: '61',
      importe: '150000',
      color: 'verde',
      ramo: '3',
      gestion: '1',
      fechaOp: '01/02/2020',
    },
    {
      fianza: '1584-0000',
      movimiento: 'Ampliacion',
      fiado: 'AUTOSERVICIO COAHUILA SA DE CV',
      antiguedad: '98',
      diasVencimiento: '31',
      importe: '20000',
      color: 'verde',
      ramo: '3',
      gestion: '1',
      fechaOp: '01/03/2020',
    },
    {
      fianza: '1845-0000',
      movimiento: 'Prorroga',
      fiado: 'BARCO QUIREZA FRANCISCO',
      antiguedad: '63',
      diasVencimiento: '33',
      importe: '980000',
      color: 'verde',
      ramo: '3',
      gestion: '0',
      fechaOp: '01/04/2020',
    },
    {
      fianza: '9711-0457',
      movimiento: 'Ampliacion',
      fiado: 'CASA GALLARDO SA DE CV',
      antiguedad: '20',
      diasVencimiento: '0',
      importe: '1000000',
      color: 'rojo',
      ramo: '3',
      gestion: '0',
      fechaOp: '01/05/2020',
    },
    {
      fianza: '6587-0457',
      movimiento: 'Ampliacion',
      fiado: 'AGROGEN SA DE CV',
      antiguedad: '15',
      diasVencimiento: '0',
      importe: '80000',
      color: 'amarillo',
      ramo: '3',
      gestion: '0',
      fechaOp: '01/06/2020',
    },
  ];

  constructor(private getPrimaFacade: GetPrimaFacade) {}


  ngOnInit(): void {
    /* se hace la peticion mediante el store  */
    this.getPrimaFacade.getPrimaAction(1);
  }
}
