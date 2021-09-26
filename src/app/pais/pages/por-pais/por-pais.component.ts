import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  // styleUrls: ['../../../app.component.css']
})
export class PorPaisComponent {

  public termino    : string = 'Hola mundo'
  public haveError  : boolean = false
  public Paises     : Country[] = []

  constructor(private paisService: PaisService) { }


  buscar(termino  : string) {
    // console.log(this.termino);
    // this.termino = termino
    this.haveError = false

    this.paisService.buscarPais(termino)
      .subscribe(
        paises => {
          console.log('Esta es tu respuesta', paises[0]);
            this.Paises   = paises
        },
        err => {
          this.haveError  = true
          this.Paises     = []
          console.table('Hay un error', err);
        }
      )
  }
  sugerencias(termino : string){
   this.haveError = false 
  }
}
