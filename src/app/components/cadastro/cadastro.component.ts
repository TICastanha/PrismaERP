import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  model: Usuario = { nome: '', email: '', senha: '' };
  loading = false;

  // use a base SEM o recurso e adicione o recurso na chamada
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  criar(form: NgForm) {
    if (form.invalid || this.loading) return;
    this.loading = true;

    this.http.post<Usuario>(`${this.baseUrl}/usuarios`, this.model).subscribe({
      next: () => this.router.navigate(['/login'], { queryParams: { created: '1' } }),
      error: (err) => { console.error('Falhou', err); this.loading = false; }
    });
  }
}