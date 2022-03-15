import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    // Crear usuario
    private url='https://www.googleapis.com/identitytoolkit/v3/relyingparty';
    private apikey='AIzaSyD_2F3NAL1gRoZEw4SRAUsnhMLSgSP7lYw';

    /**Nueva propiedad */
    userToken:string;



 /**Inyeccion del servicio HTTP */
  constructor(private http: HttpClient) {
  this.leerToken();

   }

  logout(){

  }
login(usuario:UsuarioModel){
  const authData={
    ...usuario,
    returnSecureToken: true
    };
    /**retorna una peticion post del endpoint de firebase login*/
    return this.http.post(`${ this.url }/verifyPassword?key=${ this.apikey }`, authData)
    .pipe( map(resp=>{

      this.guardarToken(resp['idToken']);
                 return resp;})
       );

  }

nuevoUsuario(usuario:UsuarioModel){
  const authData={
  ...usuario,
  returnSecureToken: true
  };
      /**retorna una peticion post del endpoint de firebase crear nuevo usuario*/
       return this.http.post(`${ this.url }/signupNewUser?key=${ this.apikey }`, authData)
       .pipe( map(resp=>{
        this.guardarToken(resp['idToken']);
                   return resp;})
         );

  }



    private guardarToken( idToken:string){
       this.userToken=idToken;
       localStorage.setItem('token',idToken);
    }
    leerToken(){
          if(localStorage.getItem('token')){
            this.userToken=localStorage.getItem('token');
          }else {
            this.userToken='';
          }
          return this.userToken;
    }

}
