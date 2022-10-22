import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Lucia',
      edad:15,
    },
    {
      nombre:'Jardel',
      edad:15,
    },
    {
      nombre:'Diego',
      edad:15,
    }
  ]

get alumnosUtl():AlumnosUtl[]{
  return [...this._alumnosUtl]; // con los ... se desestructura un objeto
}

  constructor() { }

  agregarAlumno(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
  }
 /* mostrarSaludo(){
    console.log('Saludo Service');
  }
  */
}
