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

  constructor(private arfamedService: ArfamedService, private router: Router, private activedRoute: ActivatedRoute) { }

  profesional: Profesional;
  edit: boolean = false;

  ngOnInit(): void {
    this.usuario(this.profesional)
    this.modify();
  }

  modify() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.arfamedService.getProfesional(params.id).subscribe(
        res => {this.usuario(res); this.edit = true},
        err => {console.error(err)}
      );
    }
  }

  update() {
    this.arfamedService.putProfesional(this.profesional.cod_prof, this.profesional).subscribe(
      res => {this.router.navigate(['/list']);},
      err => {console.error(err)}
    );
  }

  peticionInicial() {
    this.arfamedService.getList().subscribe(
      res => {},
      err => {console.error(err)}
    );
  }

  usuario(p: Profesional) {
    if (p == null) {
      this.profesional = {
        cod_prof: 100,
        nombre_prof: 'Nombre',
        apellido_prof: 'Apellido',
        celular_prof: 123456789,
        correo_prof: 'ejemplo@ejem.com',
        cod_especialidad: 3
      };
    } else {
      this.profesional = p[0];
    }
  };

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
