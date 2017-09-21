import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.css']
})
export class BindingTestComponent implements OnInit {
  public rows : Array<Product>;  
  constructor (){ }

  ngOnInit() {
    this.rows =[
    {
        "id": 2,
        "name": "Product 002"
    },
    {
        "id": 3,
        "name": "Product 003"
    },
    {
        "id": 4,
        "name": "Product 004"
    },
    {
        "id": 5,
        "name": "Product 001"
    },
    {
        "id": 6,
        "name": "Product 002"
    }
    ]
  }

}
