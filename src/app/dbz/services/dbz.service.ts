import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{


    private _nuevoP: Personaje[]=[
        {
          nombre:'Krillin',
          poder: 700
        },
        {
          nombre:'Goku',
          poder: 15000
        },{
          nombre:'Vegeta',
          poder: 1000
        },
    
      ];

      get nuevoP(): Personaje[]{
          return [...this._nuevoP]
      }

    constructor(){
        console.log('servicio icializado');
    }

    agregarPersonaje(nuevo:Personaje){
        this._nuevoP.push(nuevo);
    }

}