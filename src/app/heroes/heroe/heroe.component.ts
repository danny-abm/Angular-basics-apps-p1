import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string[]= ['Spiderman','Hulk','Ironman','Thor'];
    edad: number=45;
    i:number=0;
    newNom: string ='Capitan America';
    get nombreCapitalizado(): string{
        return this.newNom.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.newNom} = ${this.edad}`
    }
    acumular (valor:number) : void{
        this.edad +=valor;
    }

    cambiarHeroe (acum:number): void{
        
        
       this.newNom = this.nombre[this.i] || 'No existen mas heroes';
        this.i+=acum;
    }
}