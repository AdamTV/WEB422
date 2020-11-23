import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) { }

  // CRUD methods for entities
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPostById(id): Observable<Post> {
    // return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }


  getStaticPost(): Post{ // return type "Post"
    return {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  }
}
