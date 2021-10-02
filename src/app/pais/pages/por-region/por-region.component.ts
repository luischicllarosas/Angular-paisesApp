import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  public regiones     : string[]  = ['africa', 'asia', 'americas', 'europe', 'oceania']
  public regionActiva : string    = 'africa'
  public Paises     : Country[] = []
  constructor(public paisService : PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string)   : void  {
    if(this.regionActiva == region) return
    this.Paises       = []
    this.regionActiva = region
    this.paisService.buscarPorRegion(region)
      .subscribe(data => this.Paises = data)
      
  }

}
