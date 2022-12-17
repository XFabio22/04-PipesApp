import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
    nombreLower: string = 'fabio';
    nombreUpper : string = 'FABIO'
    nombreCompleto: string = 'FabIo AGuilar';
  }
