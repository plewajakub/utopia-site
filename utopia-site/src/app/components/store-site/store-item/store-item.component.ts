import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  asortyment = 
    [
      {
        id: 0,
        name: "tee1",
        url: "https://cdn.discordapp.com/attachments/971683092756566029/1004408810745647265/koszulka26.png"
      },
      {
        id: 1,
        name: "tee2",
        url: "https://cdn.discordapp.com/attachments/971683092756566029/1004408791762219149/koszulka24.png"
      },
      {
        id: 2,
        name: "tee3",
        url: "https://cdn.discordapp.com/attachments/971683092756566029/1004408747713638530/koszulka22.png"
      },
      {
        id:3,
        name:"tee4",
        url:"https://cdn.discordapp.com/attachments/971683092756566029/971769968964300850/koszulka13.png"
      }
    ];

    id: number;

  constructor(private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }

}
