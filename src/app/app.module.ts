import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**http Client Module */
import {HttpClientModule} from '@angular/common/http'


/**Rutas */
import { AppRoutingModule} from './app-routing.module';

/**Importacion de forms */
import {FormsModule} from '@angular/forms';
/**Componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { IngredientesComponent } from './componentes/ingredientes/ingredientes.component';
import { PlatillosComponent } from './componentes/platillos/platillos.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    IngredientesComponent,
    PlatillosComponent,
    PerfilComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
