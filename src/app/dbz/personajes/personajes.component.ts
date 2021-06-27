import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {
//@Input() nuevoP: Personaje[]=[]
get nuevoP (){
 return this.dbzService.nuevoP;
}
constructor(private dbzService:DbzService){}

}
