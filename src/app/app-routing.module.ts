import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { IngredientesComponent } from './componentes/ingredientes/ingredientes.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PlatillosComponent } from './componentes/platillos/platillos.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes =[
        {path: 'home', component: HomeComponent},
        {path: 'registro', component: RegistroComponent},
        {path: 'login', component: LoginComponent},
        {path: 'perfil', component: PerfilComponent},
        {path: 'platillos', component: PlatillosComponent},
        {path: 'ingredientes', component: IngredientesComponent},
        {path: '**', redirectTo:'home'}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{ }
