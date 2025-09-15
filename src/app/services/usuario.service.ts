import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




export interface Usuario{

  id?: number;
  nome: string;
  email: string;
  senha: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient){}

  criar(u: Usuario){
                            // rota deve bater com a chave do seu db.json
    return this.http.post<Usuario>(`${this.baseUrl}/usuarios`, u)
  }

  
}
