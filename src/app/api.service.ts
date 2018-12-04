import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://localhost:3000/api'
  constructor(private http: Http) { }

  getProjects() {
    return this.http.get(`${this.baseUrl}/projects`).toPromise()
  }
  getJobs() {
    return this.http.get(`${this.baseUrl}/jobs`).toPromise()
  }
  getUsers() {
    return this.http.get(`${this.baseUrl}/users`).toPromise()
  }
  getUserById(idUser) {
    return this.http.get(`${this.baseUrl}/users/${idUser}`).toPromise()
  }
  newUser(values) {
    return this.http.post(`${this.baseUrl}/users`, values).toPromise()
  }
  newProject(values){
    return this.http.post(`${this.baseUrl}/projects`, values).toPromise()
  }
  login(userLogin) {
    return this.http.post(`${this.baseUrl}/users/login`, userLogin).toPromise()
  }
}
