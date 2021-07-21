import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './area-logada/admin/admin.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { PerfilComponent } from './area-logada/shared/perfil/perfil.component';
import { UsuarioComponent } from './area-logada/usuario/usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciMinhaSenhaComponent } from './esqueci-minha-senha/esqueci-minha-senha.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'cadastre-se', component: CadastroComponent },
  { path: 'esqueci-minha-senha', component: EsqueciMinhaSenhaComponent },
  { path: 'area-logada', component: AreaLogadaComponent, children:[
    { path: 'admin', component: AdminComponent, children: [
    
    ]},
    { path: '', pathMatch: 'full', component: UsuarioComponent},
    { path: 'usuario', component: UsuarioComponent},
    { path: 'perfil', component: PerfilComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
