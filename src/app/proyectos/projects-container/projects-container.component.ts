import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { HttpClient, HttpRequest, HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {
  
  @select(['projects', 'bootcamp']) bootcamp: string;
  @select(['projects', 'center']) center: string;
  @select(['projects', 'state']) state: string;
  @select(['projects', 'order']) order: string;

  formNewProject: FormGroup
  projectsArray: any[]
  files: any;
  idUsuarioLogado: number


  constructor(private apiService: ApiService, private http: HttpClient) { 
    // this.projectsArray = [
    //   { id: 1, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project A', objetive: 'Social Network for Neolanders', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
    //   {id: 2, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png' ,title: 'Project B', objetive: 'A site for connecting artist and clubs', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image:'../../assets/images/projects/clubDisco.jpg'},
    //   {id: 3, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project C', objetive: 'App for helping dislexic people', bootcamp: 'UX/UI', description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/dislexia.png' },
    //   {id: 1, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project A', objetive: 'Social Network for Neolanders', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
    //   {id: 2, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project B', objetive: 'A site for connecting artist and clubs', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image:'../../assets/images/projects/clubDisco.jpg'},
    //   {id: 3, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project C', objetive: 'App for helping dislexic people', bootcamp: 'UX/UI', description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/dislexia.png' },
    //   {id: 1, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project A', objetive: 'Social Network for Neolanders', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
    //   {id: 2, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project B', objetive: 'A site for connecting artist and clubs', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image:'../../assets/images/projects/clubDisco.jpg'},
    //   {id: 3, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project C', objetive: 'App for helping dislexic people', bootcamp: 'UX/UI', description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/dislexia.png' },
    //   {id: 1, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project A', objetive: 'Social Network for Neolanders', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
    //   {id: 2, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project B', objetive: 'A site for connecting artist and clubs', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image:'../../assets/images/projects/clubDisco.jpg'},
    //   {id: 3, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project C', objetive: 'App for helping dislexic people', bootcamp: 'UX/UI', description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/dislexia.png' },
    //   {id: 1, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project A', objetive: 'Social Network for Neolanders', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
    //   {id: 2, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project B', objetive: 'A site for connecting artist and clubs', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image:'../../assets/images/projects/clubDisco.jpg'},
    //   {id: 3, author: 'Javier Vázquez', imageAuthor: '../../../assets/images/foto_linkedin_javi.png', title: 'Project C', objetive: 'App for helping dislexic people', bootcamp: 'UX/UI', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/dislexia.png'}
    // ]

    this.formNewProject = new FormGroup({
      title: new FormControl(''),
      ti_users: new FormControl(''),
      image: new FormControl(''),
      shortDescription: new FormControl(''),
      description: new FormControl(''),
      bootcamp: new FormControl(''),
      location: new FormControl(''),
      state: new FormControl(''),
      tags: new FormControl(''),
      link: new FormControl(''),
      date: new FormControl('')
    })
  }
  obtener_localStorage() {
    this.idUsuarioLogado = parseInt(localStorage.getItem("idUsuarioLogado"))
    // console.log(this.idUsuarioLogado)
  }

  onFileChange($event) {
    this.files = $event.target.files
  }


  onSubmit() {
    console.log(this.formNewProject.value)
    console.log(this.files)

    let ft = new FormData()

    ft.append("image", this.files[0], "image.png")

    ft.append("title", this.formNewProject.controls.title.value)
    ft.append("ti_users", this.formNewProject.controls.ti_users.value)
    ft.append("image", this.formNewProject.controls.image.value)
    ft.append("shortDescription", this.formNewProject.controls.shortDescription.value)
    ft.append("description", this.formNewProject.controls.description.value)
    ft.append("bootcamp", this.formNewProject.controls.bootcamp.value)
    ft.append("location", this.formNewProject.controls.location.value)
    ft.append("state", this.formNewProject.controls.state.value)
    ft.append("link", this.formNewProject.controls.link.value)
    ft.append("tags", this.formNewProject.controls.tags.value)
    ft.append("date", this.formNewProject.controls.date.value)

    ft.append("idUsuarioLogado", String(this.idUsuarioLogado))
    
    let header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data')

    const req = new HttpRequest("POST", "http://localhost:3000/api/projects", ft, {
      headers: header
    })
    this.http.request(req).toPromise().then(result => {
      console.log(result)
      
      this.apiService.getProjects().then((res) => {
       console.log(res.json())
        this.projectsArray = res.json()
        console.log(this.projectsArray)
      })
    })



    // this.apiService.newProject(this.formNewProject.value).then((res) => {
    //   console.log(res.json())

    //   const response = res.json()
    //   if (response.error) {
    //     alert(response.error)
    //   }
    //   else {
    //     this.apiService.getProjects().then((res) => {
    //       console.log(res.json())
    //       this.projectsArray = res.json()
          
    
    //     })
    //   }
    // })
  }

  ngOnInit() {
    this.obtener_localStorage()

    this.apiService.getProjects().then((res) => {
      // console.log(res.json())
      this.projectsArray = res.json()
      // console.log(this.projectsArray)
    })
  }

}
