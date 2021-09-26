import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Capital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  public Capitales  : Capital[] = []
  public haveError  = false
  // public termino    : string = 'Lima'

  constructor(private paisService: PaisService) { }

  buscar(termino  : string) {
    // console.log(this.termino);
    // this.termino = termino
    this.haveError = false

    this.paisService.buscarCapital(termino)
      .subscribe(
        capitales => {
          console.log('Esta es tu respuesta', capitales[0]);
            this.Capitales   = capitales
        },
        err => {
          this.haveError  = true
          this.Capitales     = []
          console.table('Hay un error', err);
        }
      )
  }

}
