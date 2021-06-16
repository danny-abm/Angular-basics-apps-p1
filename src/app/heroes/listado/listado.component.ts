import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] =['Spiderman','Hulk','Ironman','Thor'];
  borroHeroe: string = ' ';

  borrarHeroe(){
    console.log("borrando..");
    
    const heroeBorrado = this.heroes.pop();
    this.borroHeroe= heroeBorrado || 'Sin Heroe';
    
  }
  anadirHeroe(){
    
    this.heroes.push(this.heroes[this.heroes.length-1]);
    
  }

  

}
