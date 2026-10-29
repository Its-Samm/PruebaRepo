import { CurrencyPipe, DatePipe } from '@angular/common'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Producto } from '../../interfaces/producto.interface'; 
import { ProductoService } from '../../services/producto/producto.service'; 

@Component({
  selector: 'app-productos', 
  imports: [CurrencyPipe, DatePipe, NavbarComponent, RouterLink], 
  templateUrl: './productos.html', 
  styleUrl: './productos.scss', 
})
export class Productos implements OnInit {
  private readonly productoService = inject(ProductoService);

  productos: Producto[] = []; 
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.productoService.getAllProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.status
          ? `No fue posible cargar los productos (HTTP ${error.status}).` 
          : 'No fue posible conectar con el backend. Verifica que esté iniciado en localhost:3000.';
        this.loading = false;
      },
    });
  }
}