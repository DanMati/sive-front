import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { AdminComponent } from './area-logada/admin/admin.component';
import { UsuarioComponent } from './area-logada/usuario/usuario.component';
import { BarraLateralComponent } from './area-logada/admin/barra-lateral/barra-lateral.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciMinhaSenhaComponent } from './esqueci-minha-senha/esqueci-minha-senha.component';
import { BarraSuperiorComponent } from './area-logada/shared/barra-superior/barra-superior.component';
import { PerfilComponent } from './area-logada/shared/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AreaLogadaComponent,
    AdminComponent,
    UsuarioComponent,
    BarraLateralComponent,
    LoginComponent,
    CadastroComponent,
    EsqueciMinhaSenhaComponent,
    BarraSuperiorComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
