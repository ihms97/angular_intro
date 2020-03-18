import { Component, OnInit } from '@angular/core';
import { ArfamedService } from '../../services/arfamed.service';

import { Profesional } from '../../models/profesional'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profesional: Profesional = {
    codigo: '',
    nombre: '',
    apellido: '',
    celular: 0,
    correo: '',
    cod_esp: 0
  };

  constructor(private arfamedService: ArfamedService) { }

  ngOnInit(): void {
    this.peticionInicial();
  }

  peticionInicial() {
    this.arfamedService.getList().subscribe(
      res => {
        this.profesional = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  saveProfesional() {
    this.arfamedService.postNewProfesional(this.profesional).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteProfesional(codigo: string) {
    this.arfamedService.deleteProfesional(codigo).subscribe(
      res => {
        console.log(res);
        this.peticionInicial();
      },
      err => {
        console.log(err);
      }
    );
  }
}
