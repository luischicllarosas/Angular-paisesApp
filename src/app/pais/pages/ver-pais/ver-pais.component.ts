import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais! : Country

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisCodigo(id)),
        tap(console.log)
      )
      .subscribe(res => this.pais = res)
      
    // this.activatedRoute.params.subscribe(({ id }) => {

    //   this.paisService.buscarPaisCodigo(id)
    //     .subscribe((pais) => {
    //       console.log(pais);
    //     })

    // })
  }

}
