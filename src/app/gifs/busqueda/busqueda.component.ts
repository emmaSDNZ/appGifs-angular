import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})


export class BusquedaComponent {

  @ViewChild('textBuscar') textBuscar!:ElementRef <HTMLInputElement> ;

  constructor( private gifsService: GifsService) {}

  buscar( ){
    const value = this.textBuscar.nativeElement.value;
    
    if(value.trim().length ===0 ) return;

    this.gifsService.buscarGifs( value)
    
    this.textBuscar.nativeElement.value = '';
    
  }
 }


