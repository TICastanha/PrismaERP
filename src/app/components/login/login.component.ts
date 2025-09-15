import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  model = {

     id: Number,
     name:'',
     email: '',
     senha:'',

  }
    
  exibirNoConsole() {
   console.log(this.model.email)
   console.log(this.model.senha)
  }
}

