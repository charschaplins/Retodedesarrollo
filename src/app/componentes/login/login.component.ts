import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario: UsuarioModel =new UsuarioModel();
  recordar= false;

  /**Inyectar servicio */
  constructor(private auth: AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.usuario = new  UsuarioModel(); // inicializamos a usuario con el patron logico.

    if(this.recordar){
      localStorage.setItem('email',this.usuario.email);

    }

  }

login(form:NgForm){

  if(form.invalid){ return;}

        this.auth.login(this.usuario).subscribe(resp=>{
          console.log(resp);


        if(this.recordar){
          localStorage.setItem('email',this.usuario.email);
        }


          this.router.navigateByUrl('home');
        },(err)=>{
          console.log(err.error.error.message);

        }

    )


}

}
