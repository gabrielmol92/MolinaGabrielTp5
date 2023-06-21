import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  producto : Producto = new Producto();

  constructor(private router: Router,
              private productoService: ProductoService) { }

  ngOnInit(): void {
  }

  guardarProducto(){
    this.productoService.createProducto(this.producto).subscribe(
      (result:any )=> {
        if(result.status == 1)
         alert(result.msg);
         this.producto = new Producto();
    },
    error => { 
        alert(error.msg);
    })
  }

  volverPagina(){
    this.router.navigate(["producto"])
  }
}
