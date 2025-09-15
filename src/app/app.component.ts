import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from "./components/cadastro/cadastro.component";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet,
    FormsModule,          
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PrismaERP';
}
