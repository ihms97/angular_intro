import { Component, OnInit } from '@angular/core';
import { ArfamedService } from '../../services/arfamed.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  profesional: any = [];
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
