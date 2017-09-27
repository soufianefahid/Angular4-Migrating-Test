import { Component, OnInit , OnChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../models/products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  public columns = ['id','name'];
  public rows : Array<Product>;
  
  constructor(public apiService: ApiService , public router : Router) {
    
  }

  ngOnChanges(changes){
    console.log(changes);
  };
  ngOnInit() {
    this.apiService.get("products").subscribe(
    (data : Product[])=>{
      console.log(data);
      this.rows = data;
    });
  }

  public delete(id : string){
    console.log("delete : " + id);
    var path = 'products/' + id;
    this.apiService.delete(path).subscribe((r)=>{

    this.rows = this.rows.filter((p,i)=>{

        if(Number(id) === p.id ) {
          return false;
        }
        return true;
    },this.rows)

    });

  }
  
	public update(id:string){
	    console.log("update : " + id );
	    this.router.navigateByUrl('/products/add/' + id);
	}

}
