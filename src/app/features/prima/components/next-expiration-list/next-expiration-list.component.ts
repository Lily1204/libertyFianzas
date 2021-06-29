import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-expiration-list',
  templateUrl: './next-expiration-list.component.html',
  styleUrls: ['./next-expiration-list.component.scss'],
})
export class NextExpirationListComponent implements OnInit {
  ELEMENT_DATA: any[] = [
    { date: '01/12/2020', bail: '1954-0000', amount: '$200.000' },
    { date: '01/12/2020', bail: '8524-0000', amount: '$150.000' },
    { date: '02/12/2020', bail: '1584-0000', amount: '$20.000' },
    { date: '04/12/2020', bail: '1845-0000', amount: '$980.000' },
    { date: '05/12/2020', bail: '9711-0457', amount: '$1000.000' },
    { date: '05/12/2020', bail: '6587-0457', amount: '$80.000' },
    { date: '06/12/2020', bail: '6587-0457', amount: '$80.000' },
    { date: '07/12/2020', bail: '6587-0457', amount: '$200.000' },
    { date: '08/12/2020', bail: '1954-0000', amount: '$200.000' },
    { date: '18/12/2020', bail: '1954-0000', amount: '$200.000' },
  ];

  displayedColumns: string[] = ['date', 'bail', 'amount'];
  dataSource = this.ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
