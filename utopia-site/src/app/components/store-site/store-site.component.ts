import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store-site',
  templateUrl: './store-site.component.html',
  styleUrls: ['./store-site.component.css']
})
export class StoreSiteComponent implements OnInit {

  public asortyment: any = 
    [
    
    ];
    
    rowCount: number;
    teeCount: number;
    

  constructor(private router: Router, private http: HttpClient) { 

    this.rowCount = Math.ceil(this.asortyment.length/3);
    this.teeCount = this.asortyment.length;

  }

  ngOnInit(): void {
    this.fetchPosts()
    
  }

  routerRedirect(id: number) {
    this.router.navigate(['/store/item/', id]);
  }

  private fetchPosts() {
    this.http.get('https://utopiasite-3aaca-default-rtdb.europe-west1.firebasedatabase.app/storage/-N8qAtozOopVOlHNgb7W.json').subscribe(posts => {
      this.asortyment = posts;
      console.log(this.asortyment);
      console.log(posts);
    });
  }

}
