import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
    public asortyment: any = [];

    id: number;

  constructor(private route: ActivatedRoute, private connection: ConnectionService) { 
    this.id = this.route.snapshot.params['id'];
    
  }

  ngOnInit(): void {

    this.connection.fetchItems().subscribe(posts => {
      this.asortyment = Object.values(posts);
    });
    
  }

}
