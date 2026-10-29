import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';
import { Producto } from '../../interfaces/producto.interface'; // CAMBIO


@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'http://localhost:3000/api'; // CAMBIO

  getProducts(): Observable<Producto[]> { // CAMBIO
    return this.http.get<Producto[]>(`${this.endpoint}/productos`); // CAMBIO
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.endpoint}/categorias`); // CAMBIO
  }
}

