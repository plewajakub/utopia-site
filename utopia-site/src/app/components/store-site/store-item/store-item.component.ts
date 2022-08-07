import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
    public asortyment: any = [];

    id: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.id = this.route.snapshot.params['id'];
    
  }

  ngOnInit(): void {

    this.http.get('https://utopiasite-3aaca-default-rtdb.europe-west1.firebasedatabase.app/storage/-N8qAtozOopVOlHNgb7W.json').subscribe(posts => {
      this.asortyment = posts;
    });
    
  }

}
