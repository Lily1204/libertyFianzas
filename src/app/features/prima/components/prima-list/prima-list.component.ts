import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prima-list',
  templateUrl: './prima-list.component.html',
  styleUrls: ['./prima-list.component.scss'],
})
export class PrimaListComponent implements OnInit {
  @Input() dataSource: any;

  displayedColumns: string[] = [
    'fianza',
    'movimiento',
    'fiado',
    'antiguedad',
    'diasVencimiento',
    'importe',
  ];

  constructor() {}

  ngOnInit(): void {}
}
