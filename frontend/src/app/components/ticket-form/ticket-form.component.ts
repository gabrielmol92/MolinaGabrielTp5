import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  ticket  : Ticket  =new Ticket();
  espectadores!: Array<Espectador>;
  accion : string = "new";
  


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private ticketService : TicketService,
              private espectadorService : EspectadorService) { 

 this.espectadores = new Array<Espectador>();
 this.cargarEspectadores();               
}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
      } else {
        this.accion = "update"
        this.cargarTicket(params['id']);
      }

    });
  }

  cargarTicket(id : string){
    this.ticketService.getTicket(id).subscribe(
      result => {
       Object.assign(this.ticket,result);
    },
    error=>{
 
    }
    )
  }

  cargarEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      result => {
       result.forEach((element : any) => {
        let espectador:Espectador = new Espectador();
        Object.assign(espectador,element)
        this.espectadores.push(espectador);
        espectador = new Espectador();
       })
    },
    error => { 
      alert(error.msg);
    })
  }

  guardarTicket(){
    
    this.ticketService.createTicket(this.ticket).subscribe(
      (result:any )=> {
        if(result.status == 1){
         alert(result.msg);
         this.ticket = new Ticket();
        }
    },
    error => { 
        alert(error.msg);

    })
  }
  
  volverPagina(){
    this.router.navigate(["ticket-list"])
  }

  modificarTicket(){
    this.ticketService.editTicket(this.ticket).subscribe(
      (result:any )=> {
        if(result.status == 1){
         alert(result.msg);
         this.ticket = new Ticket();
        }
        this.router.navigate(["ticket-list"]);
    },
    error => { 
        alert(error.msg);

    })
   
  }

}
