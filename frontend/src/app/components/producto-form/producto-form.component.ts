import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
              private productoService: ProductoService,
              private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  guardarProducto(){
    this.productoService.createProducto(this.producto).subscribe(
      (result:any )=> {
        if(result.status == 1)
        this.toastr.success("Prodicto agregado correctamente")
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
