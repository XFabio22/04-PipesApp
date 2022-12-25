import { Component } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  enMayusculas:boolean = true;
  heroes : Heroe [ ] =[
     {
      nombre: 'superman',
      vuela: true,
      color:Color.azul
     },
     {
      nombre: 'Batman',
      vuela: false,
      color:Color.negro
     },
     {
      nombre: 'Robin',
      vuela: false,
      color:Color.verde
     },
     {
      nombre: 'Daredevil',
      vuela: false,
      color:Color.rojo
     },
     {
      nombre: 'Linterna verde',
      vuela: true,
      color:Color.verde
     }
  ]
  toggleMayusculas(){
    this.enMayusculas = !this.enMayusculas
  }

}
