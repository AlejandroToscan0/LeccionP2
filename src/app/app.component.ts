import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/Forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Prueba2P';
  art={
    codigo:"",
    descripcion:0,
    precio:"",
    grupo:0,
  }

  articulos =[
    {codigo:"cliente 1", descripcion:1600643850, precio:"La ESPE", grupo:1},
    {codigo:"cliente 2", descripcion:1600643850, precio:"La ESPE", grupo:2},
    {codigo:"cliente 3", descripcion:1600643850, precio:"La ESPE", grupo:3}
  ];

  hayRegistros(){
    return this.articulos.length>0
  }

  agregarRegistro(){
    for(let i=0; i<this.articulos.length;i++){
      if(this.articulos[i].codigo===this.art.codigo){
        alert('existe el articulo.');
        return;
      }
    }
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio:this.art.precio,
      grupo: this.art.grupo,
    });
      this.art.codigo="";
      this.art.descripcion=0;
      this.art.precio="";
      this.art.grupo=0;
      
  }
}
