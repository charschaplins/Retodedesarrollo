import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService,
              private router:Router) { }

      ngOnInit(): void {

    this.usuario = new  UsuarioModel(); // inicializamos a usuario con el patron logico.




      }

      onSubmit(form:NgForm){

      if(form.invalid){
                return;
              }

       this.auth.nuevoUsuario(this.usuario).subscribe(resp=>{
                      console.log(resp);
                      this.router.navigateByUrl('home');
          }, (err) =>{
            console.log(err.error.error.message);

          }

       )



      }

}
