import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos!: Array<Producto>;
  constructor(private productoService: ProductoService,
              private router : Router) { 
    this.productos = new Array<Producto>();
    this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe(
      result => {
        console.log(result)
       result.forEach((element : any) => {
        let producto:Producto = new Producto();
        Object.assign(producto,element)
        this.productos.push(producto);
        producto = new Producto();
       })
    },
    error => { 

    })
  }

agregarProducto(){
  this.router.navigate(["producto-form"])
}

}


