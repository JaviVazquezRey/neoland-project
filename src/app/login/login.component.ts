import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { ApiService } from '../api.service';
import { strictEqual } from 'assert';
import { stringify } from 'querystring';
import { Router } from '../../../node_modules/@angular/router';
import { HttpClient, HttpHeaders, HttpRequest } from '../../../node_modules/@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeAllIn', [
      state('start', style({
        'opacity': 0
      })),
      state('stop', style({
        'opacity': 1
      })),
      transition('void => *', [
        style({opacity:0}),
        animate(1200)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  formNewUser: FormGroup
  idUsuarioLogado: number
  images: any
  formToShow: number

  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) { 
    this.formToShow = 0
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

  onClickLog() {
    this.formToShow = 2;
  }

  onClickSign() {
    this.formToShow = 1;
  }

  onFileChange($event) {
    // console.log($event)

       console.log($event.target.files)
    this.images = $event.target.files;
  } 

  onSubmitSignup() {
    console.log(this.formNewUser.value)
    console.log(this.images)

    let ft = new FormData()
    ft.append("urlimage", this.images[0], "urlimage.png")
    ft.append("name", this.formNewUser.controls.name.value)
    ft.append("surname", this.formNewUser.controls.surname.value)
    ft.append("email", this.formNewUser.controls.email.value)
    ft.append("password", this.formNewUser.controls.password.value)
    ft.append("date", this.formNewUser.controls.date.value)
    ft.append("urlimage", this.formNewUser.controls.urlimage.value)
    ft.append("location", this.formNewUser.controls.location .value)
    ft.append("alias", this.formNewUser.controls.alias.value)
    ft.append("linkFacebook", this.formNewUser.controls.linkFacebook.value)
    ft.append("linkGithub", this.formNewUser.controls.linkGithub.value)
    ft.append("linkLinkedin", this.formNewUser.controls.linkLinkedin.value)
    ft.append("linkMedium", this.formNewUser.controls.linkMedium.value)
    ft.append("linkYoutube", this.formNewUser.controls.linkYoutube.value)
    ft.append("linkOthers", this.formNewUser.controls.linkOthers.value)
    ft.append("shortDescription", this.formNewUser.controls.shortDescription.value)
    ft.append("description", this.formNewUser.controls.description.value)
    ft.append("education", this.formNewUser.controls.education.value)
    ft.append("experience", this.formNewUser.controls.experience.value)
    ft.append("otherInformation", this.formNewUser.controls.otherInformation.value)

    let header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    
    const req = new HttpRequest("POST", "http://localhost:3000/api/users", ft, { 
      headers: header
    });
    
    this.http.request(req).toPromise().then(result=>{console.log(result)})

    // this.apiService.newUser(ft, header).then((res) => {
    //   console.log(res.json())

    //   const response = res.json()
    //   if (response.error) {
    //     alert(response.error)
    //   }
    //   else {
    //     console.log('Usuario Registrado correctamente')
    //   }

    // })
  }

  


  ngOnInit() {
  }

}
