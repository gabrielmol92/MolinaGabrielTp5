import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

   

export class TicketListComponent implements OnInit {

  ticketlist : Array<Ticket>;

  constructor(private ticketService : TicketService,
             private router : Router) { 
  this.ticketlist = new Array<Ticket>();
   
}

  ngOnInit(): void {
  }

  obtenerTodosLosTickets(){
    this.ticketService.
  }


}
