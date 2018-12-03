import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

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
  projectsArray : any []

  constructor(private apiService: ApiService) { 
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

  onSubmit() {
    console.log(this.formNewProject.value)
    this.apiService.newProject(this.formNewProject.value).then((res) => {
      console.log(res.json())

      const response = res.json()
      if (response.error) {
        alert(response.error)
      }
      else {
        this.apiService.getProjects().then((res) => {
          console.log(res.json())
          this.projectsArray = res.json()
    
        })
      }
    })
  }

  ngOnInit() {
    this.apiService.getProjects().then((res) => {
      console.log(res.json())
      this.projectsArray = res.json()

    })
  }

}
