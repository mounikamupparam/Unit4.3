import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addData(body: any) {
    return this.http.post('http://localhost:3000/add-student', body);
  }
  public getAllData() {
    return this.http.get('http://localhost:3000/find-all-students');
  }
  public findOne(id: any) {
    return this.http.get(`http://localhost:3000/find-student/${id}`);
  }
  public delete(body: any) {
    return this.http.post('http://localhost:3000/delete-student', body);
  }
  public update(body: any) {
    return this.http.post('http://localhost:3000/update-student', body);
  }
}
