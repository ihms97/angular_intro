import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArfamedService } from '../../services/arfamed.service';
import { Profesional } from '../../models/profesional';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profesional: Profesional = {
    cod_prof: 100,
    nombre_prof: 'Nombre',
    apellido_prof: 'Apellido',
    celular_prof: 123456789,
    correo_prof: 'ejemplo@ejem.com',
    cod_especialidad: 3
  };

  constructor(private arfamedService: ArfamedService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.modify();
  }

  modify() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.arfamedService.getProfesional(params.id).subscribe(
        res => {this.profesional = res},
        err => {console.error(err)}
      );
    } else {
      this.peticionInicial();
    }
  }

  peticionInicial() {
    this.arfamedService.getList().subscribe(
      res => {},
      err => {console.error(err)}
    );
  }

  save() { // aclarar error
    this.arfamedService.postNewProfesional(this.profesional).subscribe(
      res => {
        this.router.navigate(['/list']);
      },
      err => {console.log(err)}
    );
  }

  delete(codigo: number) {
    this.arfamedService.deleteProfesional(codigo.toString()).subscribe(
      res => {
        this.peticionInicial();
      },
      err => {console.log(err)}
    );
  }
}
