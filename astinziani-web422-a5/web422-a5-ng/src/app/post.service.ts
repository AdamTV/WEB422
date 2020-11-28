import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
import { HttpClient } from '@angular/common/http';

// maximum results per page
const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(page, tag, category): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`https://astinziani-web422-a5.herokuapp.com/api/posts?page=${page}&perPage=${perPage}${tag ? "&tag=" + tag.replace("#","") : ""}${category ? "&category=" + category : ""}`);
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://astinziani-web422-a5.herokuapp.com/api/posts/${id}`);
}
getCategories(): Observable<any>
{
    return this.http.get<any>(`https://astinziani-web422-a5.herokuapp.com/api/categories`);
}
  getTags(): Observable<string[]>{
      return this.http.get<string[]>(`https://astinziani-web422-a5.herokuapp.com/api/tags`);

  }

  constructor(private http: HttpClient) { }
}
