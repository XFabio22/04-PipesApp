import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orDerPor: string = 'sin valor'): Heroe[] {
    switch( orDerPor){
      case 'nombre': 
      return heroes.sort((a,b) => (a.nombre > b.nombre)? 1 : -1);
      
      case 'vuela':
        return  heroes.sort((a,b) => (a.vuela > b.vuela)? -1 : 1);
       

        case 'color':
        return  heroes.sort((a,b) => (a.color > b.color)? 1 : -1);
       
      default: 
        return heroes;
    }
   
  //   if ( orDerPor === 'sin valor' ){
  //     return heroes
  //   } else {
      
  //   } 
  //   return heroes;
  }

}
