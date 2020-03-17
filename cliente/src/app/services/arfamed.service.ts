import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class ArfamedService {

  API_URI = 'http://localhost:1332/api';
  constructor(private http: HttpClient) { }

  putProfesional(id: string, update: Profesional) {
    return this.http.put(`${this.API_URI}/arfamed/${id}`, update);
  }

  getList() {
    return this.http.get(`${this.API_URI}/arfamed`);
  }

  getProfesional(id: String) {
    return this.http.get(`${this.API_URI}/arfamed/${id}`);
  }

  postNewProfesional(prof: Profesional) {
    return this.http.post(`${this.API_URI}/arfamed`, prof);
  }

  deleteProfesional(id: String) {
    return this.http.delete(`${this.API_URI}/arfamed/${id}`);
  }
}
