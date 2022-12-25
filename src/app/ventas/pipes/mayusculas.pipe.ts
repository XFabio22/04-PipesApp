import { Pipe, PipeTransform } from "@angular/core";
    
@Pipe({
    name:'Mayusculas'
})

export class MayusculasPipe implements PipeTransform{

    transform():string {
        return 'Hola mundo';
    }
}