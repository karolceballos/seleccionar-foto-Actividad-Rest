import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectImage } from './model/objectImage';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl = 'http://jsonplaceholder.typicode.com/albums/1/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<ObjectImage[]> {
    return this.http.get<ObjectImage[]>(this.apiUrl);
  }
}
