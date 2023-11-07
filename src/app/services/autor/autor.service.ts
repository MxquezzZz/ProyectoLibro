import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private  API_SERVER = "http://localhost:8088/api/autores";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllAutores(): Observable<any>{
      return this.httpClient.get(this.API_SERVER+"/listarAutores");
 
  }

  public saveAutor(autor: any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+"/insertarAutores", autor);
  }

  public deleteAutor(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER +"/eliminarAutores/" + id);
  }
}
