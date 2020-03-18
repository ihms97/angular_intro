import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class ArfamedService {

  API_URI = 'http://localhost:1332/api/arfamed';

  constructor(private http: HttpClient) { }

  putProfesional(cod: string, prof: Profesional) {
    return this.http.put(`${this.API_URI}/${cod}`, prof);
  }

  getList() {
    return this.http.get(`${this.API_URI}`);
  }

  getProfesional(cod: String) {
    return this.http.get(`${this.API_URI}/${cod}`);
  }

  postNewProfesional(prof: Profesional) {
    console.log(prof);
    return this.http.post(`${this.API_URI}`, prof);
  }

  deleteProfesional(cod: string) {
    return this.http.delete(`${this.API_URI}/${cod}`);
  }
}
