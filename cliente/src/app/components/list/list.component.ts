import { Component, OnInit } from '@angular/core';
import { ArfamedService } from '../../services/arfamed.service';
import { Profesional } from '../../models/profesional';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  profesional: any = [];

  constructor(private arfamedService: ArfamedService) { }

  ngOnInit(): void {
    this.peticionInicial();
  }

  peticionInicial() {
    this.arfamedService.getList().subscribe(
      res => {this.profesional = res},
      err => {console.error(err)}
    );
  }

  delete(codigo: string) {
    this.arfamedService.deleteProfesional(codigo).subscribe(
      res => {
        console.log(res);
        this.peticionInicial();
      },
      err => {console.log(err)}
    );
  }
}
