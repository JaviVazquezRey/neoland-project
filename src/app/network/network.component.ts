import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  
  usersArray: any[]
  // formNewUser: FormGroup;

  constructor(private apiService: ApiService, private router: Router) { 
    // this.formNewUser = new FormGroup({
    //   name: new FormControl(''),
    //   surname: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    //   date: new FormControl(''),
    //   urlimage: new FormControl(''),
    //   location: new FormControl(''),
    //   alias: new FormControl(''),
    //   linkFacebook: new FormControl(''),
    //   linkGithub: new FormControl(''),
    //   linkLinkedin: new FormControl(''),
    //   linkMedium: new FormControl(''),
    //   linkYoutube: new FormControl(''),
    //   linkOthers: new FormControl(''),
    //   shortDescription: new FormControl(''),
    //   description: new FormControl(''),
    //   education: new FormControl(''),
    //   experience: new FormControl(''),
    //   otherInformation: new FormControl('')
    // })
    // this.usersArray = [
    //   {
    //     id: 1,
    //     name: 'Javier',
    //     surname: 'Vázquez Rey',
    //     email: 'j.vazquezrey@hotmail.com',
    //     password: 'azulejo1',
    //     date: '2018-11-22 18:01:33',
    //     urlimage: '../../assets/images/foto_linkedin_javi.png',
    //     location: 'Madrid',
    //     alias: 'Javier Vázquez Rey',
    //     linkFacebook: 'https://www.facebook.com/profile.php?id=1348106948',
    //     linkGithub: 'https://github.com/JaviVazquezRey',
    //     linkLinkedin: 'https://github.com/JaviVazquezRey',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web Developer',
    //     description: 'Profesional con una formación multidisciplinar y una trayectoria laboral transversal. Mi perfil se define con tres facetas destacables en una posición de Full Stack.',
    //     education: 'Bootcamp Full Stack web developer junior. Doble grado ADE - Comunicación Audiovisual. Erasmus in Business Administration',
    //     experience: 'Consultor de negocio software,         Project Assistant, Financial Assistant and Software tester.',
    //     otherInformation: 'Gestión del Tiempo, Empatía y  Comunicación, Creatividad, Capacidad de Superación, Adaptabilidad y Trabajo en Equipo.'
    //   },
    //   {
    //     id: 2,
    //     name: 'Anthony',
    //     surname: 'Calderón',
    //     email: 'a.calderon@hotmail.com',
    //     password: 'azulejo2',
    //     date: '2018-11-22 18:05:53',
    //     urlimage: '../../assets/images/users/tony.jpg',
    //     location: 'NYC',
    //     alias: 'Tony',
    //     linkFacebook: 'https://www.facebook.com/tonycalderony',
    //     linkGithub: '',
    //     linkLinkedin: 'https://www.linkedin.com/in/anthony-calderon-garcia/',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web Developer',
    //     description: 'Extremely creative and curious professional with experience in an array of categories including Finance, Advertising, Urban Design and Education.',
    //     education: '',
    //     experience: '',
    //     otherInformation: ''
    //   },
    //   {
    //     id: 3,
    //     name: 'Mario',
    //     surname: 'Girón',
    //     email: 'm.guillon@hotmail.com',
    //     password: 'azulejo3',
    //     date: '2018-11-22 18:05:53',
    //     urlimage: '../../assets/images/users/mario.jpg',
    //     location: 'Valencia',
    //     alias: 'Pollito',
    //     linkFacebook: '',
    //     linkGithub: '',
    //     linkLinkedin: '',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web & Mobile Developer / Angular 7 / Ionic / iOS / Ruby On Rails',
    //     description: 'Desarrollador Web y móvil con más de 10 años de experiencia en el mundo de la creación de software. Experto formador con más de una treintena de cursos impartidos sobre nuevas tecnologías.',
    //     education: 'Tecnico en desarrollo de aplicaciones',
    //     experience: '',
    //     otherInformation: ''
    //   },
    //   {
    //     id: 1,
    //     name: 'Javier',
    //     surname: 'Vázquez Rey',
    //     email: 'j.vazquezrey@hotmail.com',
    //     password: 'azulejo1',
    //     date: '2018-11-22 18:01:33',
    //     urlimage: '../../assets/images/foto_linkedin_javi.png',
    //     location: 'Madrid',
    //     alias: 'Javier Vázquez Rey',
    //     linkFacebook: 'https://www.facebook.com/profile.php?id=1348106948',
    //     linkGithub: 'https://github.com/JaviVazquezRey',
    //     linkLinkedin: 'https://github.com/JaviVazquezRey',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web Developer',
    //     description: 'Profesional con una formación multidisciplinar y una trayectoria laboral transversal. Mi perfil se define con tres facetas destacables en una posición de Full Stack.',
    //     education: 'Bootcamp Full Stack web developer junior. Doble grado ADE - Comunicación Audiovisual. Erasmus in Business Administration',
    //     experience: 'Consultor de negocio software,         Project Assistant, Financial Assistant and Software tester.',
    //     otherInformation: 'Gestión del Tiempo, Empatía y  Comunicación, Creatividad, Capacidad de Superación, Adaptabilidad y Trabajo en Equipo.'
    //   },
    //   {
    //     id: 2,
    //     name: 'Anthony',
    //     surname: 'Calderón',
    //     email: 'a.calderon@hotmail.com',
    //     password: 'azulejo2',
    //     date: '2018-11-22 18:05:53',
    //     urlimage: '../../assets/images/users/tony.jpg',
    //     location: 'NYC',
    //     alias: 'Tony',
    //     linkFacebook: 'https://www.facebook.com/tonycalderony',
    //     linkGithub: '',
    //     linkLinkedin: 'https://www.linkedin.com/in/anthony-calderon-garcia/',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web Developer',
    //     description: 'Extremely creative and curious professional with experience in an array of categories including Finance, Advertising, Urban Design and Education.',
    //     education: '',
    //     experience: '',
    //     otherInformation: ''
    //   },
    //   {
    //     id: 3,
    //     name: 'Mario',
    //     surname: 'Girón',
    //     email: 'm.guillon@hotmail.com',
    //     password: 'azulejo3',
    //     date: '2018-11-22 18:05:53',
    //     urlimage: '../../assets/images/users/mario.jpg',
    //     location: 'Valencia',
    //     alias: 'Pollito',
    //     linkFacebook: '',
    //     linkGithub: '',
    //     linkLinkedin: '',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web & Mobile Developer / Angular 7 / Ionic / iOS / Ruby On Rails',
    //     description: 'Desarrollador Web y móvil con más de 10 años de experiencia en el mundo de la creación de software. Experto formador con más de una treintena de cursos impartidos sobre nuevas tecnologías.',
    //     education: 'Tecnico en desarrollo de aplicaciones',
    //     experience: '',
    //     otherInformation: ''
    //   },
    //   {
    //     id: 1,
    //     name: 'Javier',
    //     surname: 'Vázquez Rey',
    //     email: 'j.vazquezrey@hotmail.com',
    //     password: 'azulejo1',
    //     date: '2018-11-22 18:01:33',
    //     urlimage: '../../assets/images/foto_linkedin_javi.png',
    //     location: 'Madrid',
    //     alias: 'Javier Vázquez Rey',
    //     linkFacebook: 'https://www.facebook.com/profile.php?id=1348106948',
    //     linkGithub: 'https://github.com/JaviVazquezRey',
    //     linkLinkedin: 'https://github.com/JaviVazquezRey',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web Developer',
    //     description: 'Profesional con una formación multidisciplinar y una trayectoria laboral transversal. Mi perfil se define con tres facetas destacables en una posición de Full Stack.',
    //     education: 'Bootcamp Full Stack web developer junior. Doble grado ADE - Comunicación Audiovisual. Erasmus in Business Administration',
    //     experience: 'Consultor de negocio software,         Project Assistant, Financial Assistant and Software tester.',
    //     otherInformation: 'Gestión del Tiempo, Empatía y  Comunicación, Creatividad, Capacidad de Superación, Adaptabilidad y Trabajo en Equipo.'
    //   },
    //   {
    //     id: 2,
    //     name: 'Anthony',
    //     surname: 'Calderón',
    //     email: 'a.calderon@hotmail.com',
    //     password: 'azulejo2',
    //     date: '2018-11-22 18:05:53',
    //     urlimage: '../../assets/images/users/tony.jpg',
    //     location: 'NYC',
    //     alias: 'Tony',
    //     linkFacebook: 'https://www.facebook.com/tonycalderony',
    //     linkGithub: '',
    //     linkLinkedin: 'https://www.linkedin.com/in/anthony-calderon-garcia/',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web Developer',
    //     description: 'Extremely creative and curious professional with experience in an array of categories including Finance, Advertising, Urban Design and Education.',
    //     education: '',
    //     experience: '',
    //     otherInformation: ''
    //   },
    //   {
    //     id: 3,
    //     name: 'Mario',
    //     surname: 'Girón',
    //     email: 'm.guillon@hotmail.com',
    //     password: 'azulejo3',
    //     date: '2018-11-22 18:05:53',
    //     urlimage: '../../assets/images/users/mario.jpg',
    //     location: 'Valencia',
    //     alias: 'Pollito',
    //     linkFacebook: '',
    //     linkGithub: '',
    //     linkLinkedin: '',
    //     linkOthers: '',
    //     shortDescription: 'Full Stack Web & Mobile Developer / Angular 7 / Ionic / iOS / Ruby On Rails',
    //     description: 'Desarrollador Web y móvil con más de 10 años de experiencia en el mundo de la creación de software. Experto formador con más de una treintena de cursos impartidos sobre nuevas tecnologías.',
    //     education: 'Tecnico en desarrollo de aplicaciones',
    //     experience: '',
    //     otherInformation: ''
    //   }
    // ]
  }
  // onSubmit() {
  //   console.log(this.formNewUser.value) 
  //   this.apiService.newUser(this.formNewUser.value).then((res) => {
  //     console.log(res.json())
      
  //     const response = res.json()
  //     if (response.error) {
  //       alert(response.error)
  //     }
  //     else {
  //       this.apiService.getUsers().then((res) => {
  //         this.usersArray = res.json()
  //       })
  //     }
  //   })
  // }

  ngOnInit() {
    this.apiService.getUsers().then((res) => {
      console.log(res.json())
      this.usersArray = res.json()
    })
  }
  visitProfile(idUser) {
    console.log(idUser)
    // this.apiService.getUserById(idUser).then((res) => {
    //   console.log(res.json())
    // })
    this.router.navigate(['network/', idUser])
  }
}