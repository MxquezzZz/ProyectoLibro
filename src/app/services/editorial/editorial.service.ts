import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  private API_SERVER = "http://localhost:8088/api/editoriales";

  constructor(
    private httClient: HttpClient
  ) { }

  public getAllEditorial(): Observable<any>{
    return this.httClient.get(`${this.API_SERVER}/listarEditoriales`)
  }
}
