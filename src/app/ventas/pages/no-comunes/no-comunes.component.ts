import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  //i18nSelect
  nombre:string = 'Susana';
  genero:string='femenino';
  inviMap = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }


   //i18nPlural

   clientes:string[] = ['Maria','pedro','enrique','pablo','Jesus']

   clientesMap={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': ' tenemos 1 cliente esperando',
    '=2': ' tenemos 2 clientes esperando',
    'other': 'tenemos  # clientes esperando'
    //other es el argumento , es como un else  y el # es el valor/ largo de el array
   }


   cambiarCliente(){
      this.nombre = 'Fabio';
      this.genero = 'masculino';
   }


   borrarCliente(){
    this.clientes.pop();
   }


   //KeyValue Pipe

   persona = {
    nombre: 'Fabio',
    edad: 18 ,
    direccion : 'Nacaome Valle, Honduras'
   }

   //Json Pipe

   heroes = [ 
    {
      nombre:'Superman',
      vuela : true
    },
    {
      nombre:'Robin',
      vuela : false
    },
    {
      nombre:'Aquaman',
      vuela : false
    }
   ]



   //async Pipe
   miObservable = interval(2000); //0 ,1,2,3,4,5,6,7....

   valorPromesa = new Promise((resolve, reject) => {
    setTimeout (() => {
      resolve ('Fin de la promesa')
    }, 3500);
   } )  

}
