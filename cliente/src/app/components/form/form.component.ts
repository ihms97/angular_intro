import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArfamedService } from '../../services/arfamed.service';
import { Profesional } from '../../models/profesional';
import { Especialidad } from '../../models/especialidad';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor(private arfamedService: ArfamedService, private router: Router, private activedRoute: ActivatedRoute) { }

  profesional: Profesional;
  especialidad: Especialidad;
  edit: boolean = false;
  selected: String;

  ngOnInit(): void {
    this.modify();
    this.ListEsp();
  }

  modify() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.arfamedService.getProfesional(params.id).subscribe(
        res => {
          this.usuario(res);
          this.focus(res);
          this.edit = true
        },
        err => {console.error(err)}
      );
    } else {
      this.codEsp();
      this.usuario(this.profesional);
    }
  }

  focus(p: Profesional) {
    const pr = p[0].cod_especialidad;
    this.arfamedService.getConsEsp(pr).subscribe(
      res => {
        this.selected = res[0].detalle_especialidad;
        console.log(this.selected);
      },
      err => {console.log(err)}
    );
  }

  codEsp() {
    this.arfamedService.getCodEsp().subscribe(
      res => {
        this.profesional.cod_especialidad = res[0]['max(cod_prof)'];
      },
      err => {console.log(err)}
    );
  }
  
  getEsp() {
    this.profesional.cod_especialidad = this.especialidad.cod_especialidad;
  }

  update() {
    this.getEsp();
    this.arfamedService.putProfesional(this.profesional.cod_prof, this.profesional).subscribe(
      res => {this.router.navigate(['/list'])},
      err => {console.error(err)}
    );
  }

  ListEsp() {
    this.arfamedService.getListEsp().subscribe(
      res => {this.especialidad = res},
      err => {console.log(err)}
    );
  }

  usuario(p: Profesional) {
    //this.usuarioEsp(p);
    if (p == null) {
      this.profesional = {
        cod_prof: 0,
        nombre_prof: 'Nombre',
        apellido_prof: 'Apellido',
        celular_prof: 912345678,
        correo_prof: 'ejemplo@ejem.com',
        cod_especialidad: 1
      };
    } else {
      this.profesional = p[0];
    }
  };

  save() {
    this.getEsp();
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
        this.router.navigate(['/list']);
      },
      err => {console.log(err)}
    );
  }

  peticionInicial() {
    this.arfamedService.getList().subscribe(
      res => {this.profesional = res},
      err => {console.error(err)}
    );
  }
}
