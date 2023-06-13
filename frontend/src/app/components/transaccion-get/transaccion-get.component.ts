import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-get',
  templateUrl: './transaccion-get.component.html',
  styleUrls: ['./transaccion-get.component.css']
})
export class TransaccionGetComponent implements OnInit {
  transacciones: Array<Transaccion>;
  desde : string;
  hasta : string;
  monedas: Array<any>;
  
  
  constructor(private transaccionService:TransaccionService) {
    this.transacciones = new Array<Transaccion>();
    this.desde = "";
    this.hasta = "";
    this.monedas = [];
    this.obtenerMonedas();

   }

  
  ngOnInit(): void {
  }


  obtenerTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      result =>{
         this.transacciones = new Array<Transaccion>();
         let transaccion = new Transaccion();
        result.forEach((element:any) => {
          Object.assign(transaccion, element)
          this.transacciones.push(transaccion);
          transaccion = new Transaccion();
         })
      },      
      error =>{

      }
    )
   }

  obtenerTransaccionesPorFiltro(){
    this.transaccionService.getTransaccionesPorFiltro(this.desde,this.hasta).subscribe(
      result =>{
        this.transacciones = new Array<Transaccion>();
        let transaccion = new Transaccion();
        result.forEach((element:any) => {
          Object.assign(transaccion, element)
          this.transacciones.push(transaccion);
          transaccion = new Transaccion();
      })
     },
      error =>{

      })
    }


    obtenerMonedas(){
      this.transaccionService.getMonedas().subscribe(
        result => {
         const resultado = result;   
         resultado.forEach((r : string) =>{
          this.monedas.push(r);
          
         });
        
        },
        error => {
         console.log(error);
        })
    }  

    public mostrarTabla(id : string){
      let elemento = document.getElementById(id)!;
      elemento.style.display = "inline-table";
     }

 
     public ocultarTabla(id : string){
      let elemento = document.getElementById(id)!;
      elemento.style.display = "none";
    }
}