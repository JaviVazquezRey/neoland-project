import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'empleo', component: EmpleoComponent },
    { path: '**', component: LoginComponent },


]