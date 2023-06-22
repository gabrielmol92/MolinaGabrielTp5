import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  from:string;
  to:string;
  amount:number;
  monedas: Array<any>;
  resultado: number;
  transaccion!: Transaccion;


 
  
  constructor(private transaccionService:TransaccionService, private toastr : ToastrService) { 
   this.monedas = [];
   this.amount=0;
   this.from="";
   this.to="";
   this.resultado = 0;
   this.obtenerMonedas();
   this.transaccion = new Transaccion();

  

  }

  ngOnInit(): void {
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

  obtenerConversion(){
    this.transaccionService.getConvert(this.amount,this.from,this.to,).subscribe(
     result => {
      this.resultado = result.result.convertedAmount; 
      this.transaccion.monedaOrigen = this.from;
      this.transaccion.cantidadOrigen = this.amount;
      this.transaccion.monedaDestino = this.to;
      this.transaccion.cantidadDestino = this.resultado;
      this.transaccion.emailCliente = "gabrielmolina8021@gmail.com";
      this.transaccion.tasaConversion = this.amount / this.resultado;
     // this.transaccionService.createTransaction(this.transaccion);
      this.guardarTransaccion();
      
    },
     error => {
      console.log(error);
     })

     
  }

  guardarTransaccion(){
    this.transaccionService.createTransaction(this.transaccion).subscribe(
      (result:any )=> {
        if(result.status == 1)
        this.toastr.success("Transaccion correcta")
        this.transaccion = new Transaccion();
    },
    error => { 
        alert(error.msg);
    })
   }

   



}
