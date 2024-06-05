import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Post } from '../posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject('') private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get<Post[]>(this.url)
  }

  create(resource){
    return this.http.post(this.url, resource)
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, resource)
  }

  delete(resource){
    return this.http.delete(this.url + '/' + resource.id)
  }
}
