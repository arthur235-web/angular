import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/users');
  }
  getDocuments(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/documents');
  }
  getPostsByUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/users/${userId}/posts`);
  }
}