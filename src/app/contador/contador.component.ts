import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  numero: number;

  constructor() {
    this.numero = 0;
  }

  ngOnInit(): void {}

  incrementar() {
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }
}
