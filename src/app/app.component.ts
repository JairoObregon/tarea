import { Component, OnInit } from '@angular/core';
import { ServeiceService } from './serveice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tarea';
  dat = ""
  nombre =""
  estado=""
  constructor( private ht: ServeiceService){}

  ngOnInit(){

  }

  carga(){
    this.ht.post(this.dat).subscribe( (data :any) => {

      this.nombre=data.nombre_o_razon_social
      this.estado=data.estado_del_contribuyente
    })
  }
}
