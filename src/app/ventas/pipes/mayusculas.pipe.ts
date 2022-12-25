import { Pipe, PipeTransform } from "@angular/core";
    
@Pipe({
    name:'Mayusculas'
    //nombre visual de el pipe : {{argumento |Mayusculas }}
})

export class MayusculasPipe implements PipeTransform{

    transform(valor:string, enMayusculas:boolean = true):string {
        // console.log(valor);
        // if(enMayusculas){
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLowerCase();
        // }
        
        return (enMayusculas)? valor.toUpperCase() : valor.toLocaleLowerCase();
    }
}