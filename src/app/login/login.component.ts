import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  constructor(private apiService: ApiService) { 
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.formLogin.value)

    this.apiService.login(this.formLogin.value).then((res) => {      
    })
  }
  ngOnInit() {
  }

}
