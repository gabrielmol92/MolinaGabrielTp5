import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

   

export class TicketListComponent implements OnInit {
  categoria : string;
  ticketList : Array<Ticket>;

  constructor(private ticketService : TicketService,
             private router : Router,
             private toastr : ToastrService) { 
  this.ticketList = new Array<Ticket>();
  this.categoria = "";
  // this.obtenerTodosLosTickets();
}

  ngOnInit(): void {
  }

  obtenerTodosLosTickets(){
    this.ticketService.getAllTickets().subscribe(
      result => {
        this.ticketList = new Array<Ticket>();
        let ticket = new Ticket();
       result.forEach((element:any) => {
         Object.assign(ticket, element)
         this.ticketList.push(ticket);
         ticket = new Ticket();
        })
      },      
      error =>{

      }
    )
   }
   
   agregarTicket(){
    this.router.navigate(["ticket",0])
   }

   modificarTicketA(ticket : Ticket){
    this.router.navigate(["ticket",ticket._id])
   }

   eliminarTicket ( ticket : Ticket){
      this.ticketService.deleteTicket(ticket._id).subscribe(
      (result:any )=> {
          if(result.status == 1)
            {
              this.toastr.warning("Ticket borrado!")
              let indexTicket:number = this.ticketList.findIndex(t => (t._id === ticket._id));
              this.ticketList.splice(indexTicket,1);
            }
        },
        error => { 
            alert(error.msg);
        })
   }


   obtenerTicketsPorFiltro(){
    this.ticketService.getTicketsByFiltro(this.categoria).subscribe(
      result => {
        this.ticketList = new Array<Ticket>();
        let ticket = new Ticket();
       result.forEach((element:any) => {
         Object.assign(ticket, element)
         this.ticketList.push(ticket);
         ticket = new Ticket();
        })
      },      
      error =>{

      }
    )
   }

   public ocultarTabla(id : string){
    let elemento = document.getElementById(id)!;
    elemento.style.display = "none";
  }

  public mostrarTabla(id : string){
    let elemento = document.getElementById(id)!;
    elemento.style.display = "inline-table";
   }
}
