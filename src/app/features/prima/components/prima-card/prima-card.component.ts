import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prima-card',
  templateUrl: './prima-card.component.html',
  styleUrls: ['./prima-card.component.scss'],
})
export class PrimaCardComponent implements OnInit {
  @Input() type: any;
  constructor() {}

  ngOnInit(): void {}
}
