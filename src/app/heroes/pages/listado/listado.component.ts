import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroeService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( res =>  this.heroes = res);
  }

}
