import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { ApiService } from '../api.service';
import { strictEqual } from 'assert';
import { stringify } from 'querystring';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  formNewUser: FormGroup
  idUsuarioLogado: number

  constructor(private apiService: ApiService, private router: Router) { 
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })


    this.formNewUser = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      date: new FormControl(''),
      urlimage: new FormControl(''),
      location: new FormControl(''),
      alias: new FormControl(''),
      linkFacebook: new FormControl(''),
      linkGithub: new FormControl(''),
      linkLinkedin: new FormControl(''),
      linkMedium: new FormControl(''),
      linkYoutube: new FormControl(''),
      linkOthers: new FormControl(''),
      shortDescription: new FormControl(''),
      description: new FormControl(''),
      education: new FormControl(''),
      experience: new FormControl(''),
      otherInformation: new FormControl('')
    })
  }

  onSubmitLogin() {
    console.log(this.formLogin.value)

    this.apiService.login(this.formLogin.value).then((res) => { 
      // console.log(res.json())
      this.idUsuarioLogado = res.json()
      console.log(this.idUsuarioLogado)
      localStorage.setItem("idUsuarioLogado", JSON.stringify(this.idUsuarioLogado))
      this.router.navigate(['/home']);

    })
  }

  onSubmitSignup() {
    console.log(this.formNewUser.value)

    this.apiService.newUser(this.formNewUser.value).then((res) => {
      console.log(res.json())

      const response = res.json()
      if (response.error) {
        alert(response.error)
      }
      else {
        console.log('Usuario Registrado correctamente')
      }

    })
  }



  ngOnInit() {
  }

}
