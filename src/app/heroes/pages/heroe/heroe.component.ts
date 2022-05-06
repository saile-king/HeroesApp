import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 10px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activated: ActivatedRoute, 
              private heroeService: HeroeService,
              private Route: Router) { }

  ngOnInit(): void {
    this.activated.params
    .pipe(
      switchMap( ( {id} ) => this.heroeService.getHeroePorId( id ) ),
    )
      .subscribe( heroe => this.heroe = heroe);
  }

  regresar(){
    this.Route.navigateByUrl('/heroes/listado');
  }

}
