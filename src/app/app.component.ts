import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesApp';
  nombre: string = 'Fabio Aguilar'
  valor : number = 1000;
  obj = { 
    nombre : 'Fabio'
  }

  showInfo(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
