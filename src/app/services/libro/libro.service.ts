import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private API_SERVER = "http://localhost:8088/api/libros";

  constructor(

    private httpClient: HttpClient

  ) { }

  public getAllLibro(): Observable<any>{
    return this.httpClient.get(`${this.API_SERVER}/listarLibros`);
  } 

  public saveLibro(libro: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + '/insertarLibros', libro);
  } 

  public deleteLibro(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + '/eliminarLibro/'+ id);
  } 

}
