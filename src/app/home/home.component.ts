import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postsArray: any[]
  formNewPost: FormGroup
  idUsuarioLogado: number
  usuarioLogueado:any


  constructor(private apiService: ApiService) { 
    this.formNewPost = new FormGroup({
      title: new FormControl(''),
      fkUser: new FormControl(''),
      date: new FormControl(''),
      content: new FormControl(''),
      image: new FormControl(''),
      video: new FormControl(''),
      links: new FormControl('')
    })
  }
  obtener_localStorage() {
    this.idUsuarioLogado = parseInt(localStorage.getItem("idUsuarioLogado"))
     console.log(this.idUsuarioLogado)
  }

  getPosts() {
    this.apiService.getPosts().then((res) => {
      this.postsArray = res.json()
      this.postsArray.reverse()
    })
  }

  onSubmit() {
    
    console.log(this.formNewPost.value)
    console.log(this.idUsuarioLogado)

    this.apiService.newPost(this.formNewPost.controls.content.value, this.idUsuarioLogado).then((res) => {
      console.log(res.json())
      
      const response = res.json()
      if (response.error) {
        alert(response.error)
      }
      else {
        this.getPosts()
      }
    })
  }

  ngOnInit() {
    this.obtener_localStorage()
    this.apiService.getUserById(this.idUsuarioLogado).then((res) => {
      this.usuarioLogueado = res.json()
      console.log(this.usuarioLogueado.urlimage)
    })

    this.getPosts()
  }

}
