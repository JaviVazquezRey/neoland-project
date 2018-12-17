import { CanActivate, Router } from '@angular/router'
import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }
    
    canActivate() {
        if (localStorage.getItem('idUsuarioLogado')) {
           return true 
        }
        else {
            this.router.navigate(['/login'])          
        }

    }
}