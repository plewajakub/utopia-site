import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-store-site',
  templateUrl: './store-site.component.html',
  styleUrls: ['./store-site.component.css']
})
export class StoreSiteComponent implements OnInit {
  public asortyment: any;

  constructor(private router: Router, private http: HttpClient, private connection:ConnectionService) { 

    this.connection.fetchItems().subscribe(items => {
      this.asortyment = Object.values(items);
      console.log(this.asortyment);
    });
  }

  ngOnInit(): void {
    
  }

  routerRedirect(id: number) {
    this.router.navigate(['/store/item/', id]);
  }

}
