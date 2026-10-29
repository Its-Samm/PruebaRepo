import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Producto } from '../../interfaces/producto.interface'; 
import { CatalogService } from '../../services/catalog/catalog.service';

@Component({
  selector: 'app-catalog-page',
  imports: [NavbarComponent, RouterLink, CurrencyPipe, DatePipe], 
  templateUrl: './catalog.page.html',
  styleUrl: './catalog.page.scss',
})
export class CatalogPage implements OnInit {
  private readonly catalogService = inject(CatalogService);

  productos: Producto[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe({ 
      next: (productos) => {
        this.productos = productos; 
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar el catálogo. Verifica que el backend esté disponible.';
        this.loading = false;
      },
    });
  }
}