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

<<<<<<< HEAD
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
=======


>>>>>>> 13468b3429280f455c83f2067888f17cfdfff6a8
}

