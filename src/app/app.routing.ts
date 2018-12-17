import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { NetworkComponent } from './network/network.component';
import { UserNetworkComponent } from './network/user-network/user-network.component';
import { LoginGuard } from './login.guard';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },  
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
    { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard] },
    { path: 'proyectos', component: ProyectosComponent, canActivate: [LoginGuard] },
    { path: 'empleo', component: JobsComponent, canActivate: [LoginGuard] },
    { path: 'network', component: NetworkComponent, canActivate: [LoginGuard] },
    { path: 'network/:idUser', component: UserNetworkComponent, canActivate: [LoginGuard]},
    { path: '**', component: LoginComponent }


]