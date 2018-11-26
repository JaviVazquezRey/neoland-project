import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },  
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'empleo', component: JobsComponent },
    { path: '**', component: LoginComponent },


]