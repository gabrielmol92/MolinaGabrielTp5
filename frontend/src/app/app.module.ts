import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionGetComponent } from './components/transaccion-get/transaccion-get.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { LocalExtranjeroPipe } from './pipe/local-extranjero.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductoFormComponent,
    TransaccionComponent,
    TransaccionGetComponent,
    TicketFormComponent,
    TicketListComponent,
    LocalExtranjeroPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxTypedJsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
