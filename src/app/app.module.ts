import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule      
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { HeaderAppComponent } from './header-app/header-app.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { FilterProjectsComponent } from './proyectos/filter-projects/filter-projects.component';
import { ProjectsContainerComponent } from './proyectos/projects-container/projects-container.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { JobsComponent } from './jobs/jobs.component';
import { FilterJobsComponent } from './jobs/filter-jobs/filter-jobs.component';
import { JobsContainerComponent } from './jobs/jobs-container/jobs-container.component';
import { NetworkComponent } from './network/network.component';
import { UserNetworkComponent } from './network/user-network/user-network.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    HeaderAppComponent,
    FooterMainComponent,
    FilterProjectsComponent,
    ProjectsContainerComponent,
    JobsComponent,
    FilterJobsComponent,
    JobsContainerComponent,
    NetworkComponent,
    UserNetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    RouterModule.forRoot(appRoutes),
    NgReduxModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension){ 
    let enhancers = isDevMode() ? [devTools.enhancer()] : []
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers)
  }


}
