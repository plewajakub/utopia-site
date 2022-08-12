import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  public products: any;
  public isAdding = false;
  public newProduct: any;
  constructor(private router: Router, private connection: ConnectionService) {
      this.connection.fetchItems().subscribe(items => {
      this.products = Object.values(items);
    })
   }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    this.connection.pushItems(form.value).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
