import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor(private http: HttpClient) { 
  }

  fetchItems() {
    return this.http.get('https://utopiasite-3aaca-default-rtdb.europe-west1.firebasedatabase.app/storage/-N8qAtozOopVOlHNgb7W.json')
  }

  
}
