import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../interfaces/producto.interface'; 

@Injectable({
  providedIn: 'root',
})
export class ProductoService { 
  constructor(private http: HttpClient) {}

  getAllProductos(): Observable<Producto[]> { 
    return this.http.get<Producto[]>('http://localhost:3000/api/productos'); // CAMBIO
  }
}
