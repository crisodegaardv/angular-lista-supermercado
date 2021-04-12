import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        titulo: 'fideos',
        precio: 700,
        cantidad: 10,
        total: 0,
        check: true
      },
      {
        id: 1,
        titulo: 'salsa de tomate',
        precio: 200,
        cantidad: 15,
        total: 0,
        check: false
      },
      {
        id: 3,
        titulo: 'carne molida',
        precio: 1690,
        cantidad: 6,
        total: 0,
        check: false
      }

    ]
  }

}
