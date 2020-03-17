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
    cod: 0,
    nombre: '',
    apellido: '',
    celular: 0,
    correo: '',
    cod_esp: 0
  };

  constructor(private arfamedService: ArfamedService) { }

  ngOnInit(): void {
    this.arfamedService.getList().subscribe(
      res => {
        this.profesional = res;
      },
      err => console.log(err)
    )
  }

}
