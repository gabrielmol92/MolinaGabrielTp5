import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionGetComponent } from './components/transaccion-get/transaccion-get.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path: 'producto', component: ProductoComponent},
  {path: 'producto-form', component: ProductoFormComponent},
  {path: 'transaccion', component: TransaccionComponent},
  {path: 'transaccion-get', component: TransaccionGetComponent},
  {path: 'ticket/:id', component: TicketFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
