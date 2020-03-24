import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class ArfamedService {

  API_URIA = 'http://localhost:1332/api/arfamed';
  API_URIB = 'http://localhost:1332/api/data';


  constructor(private http: HttpClient) { }

  putProfesional(cod: string|number, prof: Profesional) {
    return this.http.put(`${this.API_URIA}/${cod}`, prof);
  }

  getList() {
    return this.http.get(`${this.API_URIA}`);
  }

  getListEsp() {
    return this.http.get(`${this.API_URIB}`);
  }

  getConsEsp(cod: String) {
    return this.http.get(`${this.API_URIB}/${cod}`);
  }

  getProfesional(cod: String) {
    return this.http.get(`${this.API_URIA}/${cod}`);
  }

  postNewProfesional(prof: Profesional) {
    console.log(prof);
    return this.http.post(`${this.API_URIA}`, prof);
  }

  deleteProfesional(cod: String) {
    return this.http.delete(`${this.API_URIA}/${cod}`);
  }
}
