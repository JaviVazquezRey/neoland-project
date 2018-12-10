import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem("idUsuarioLogado")
    this.router.navigate(['/login']);
  }

}
