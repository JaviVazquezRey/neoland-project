import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  idUsuarioLogado: number
  usuarioLogueado:any

  // usersArray: any[]
  projectsArray: any[]
  postsArray: any[]
  infoProject: boolean

  formNewPost: FormGroup
  formUpdateUser: FormGroup;
  formShow: number
  
  constructor(private apiService: ApiService, private router: Router) { 

    this.formShow = 0
    
    this.formNewPost = new FormGroup({
      title: new FormControl(''),
      fkUser: new FormControl(''),
      date: new FormControl(''),
      content: new FormControl(''),
      image: new FormControl(''),
      video: new FormControl(''),
      links: new FormControl('')
    })
    
    this.formUpdateUser = new FormGroup({
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
    //     shortDescription: 'https://github.com/JaviVazquezRey',
    //     description: 'Profesional con una formación multidisciplinar y una trayectoria laboral transversal. Mi perfil se define con tres facetas destacables en una posición de Full Stack: ',
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
    //     urlimage: '',
    //     location: 'NYC',
    //     alias: 'Tony',
    //     linkFacebook: 'https://www.facebook.com/tonycalderony',
    //     linkGithub: '',
    //     linkLinkedin: 'https://www.linkedin.com/in/anthony-calderon-garcia/',
    //     linkOthers: '',
    //     shortDescription: '',
    //     description: '',
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
    //     urlimage: '',
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


    // this.projectsArray = [
    //   {
    //     id: 1,
    //     title: 'Project A',
    //     ti_users: 1, //Seguro que hay que poner esto o se hace en la tabla de índices????
    //     image: '../../assets/images/projects/network.jpg',
    //     shortDescription: 'Social Network for Neolanders',
    //     description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.',
    //     bootcamp: 'Full-Stack',
    //     location: 'Madrid',
    //     state: 'in-progress',
    //     tags: '',
    //     link: '',
    //     date: '2018-11-14 00:00:00'
    //   },
    //   {
    //     id: 2,
    //     title: 'Project B',
    //     ti_users: 2, //Seguro que hay que poner esto o se hace en la tabla de índices????
    //     image: '../../assets/images/projects/clubDisco.jpg',
    //     shortDescription: 'A site for connecting artist and clubs',
    //     description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.',
    //     bootcamp: 'Full-Stack',
    //     location: 'Madrid',
    //     state: 'in-progress',
    //     tags: '',
    //     link: '',
    //     date: '2018-11-20 00:00:00'
    //   },
    //   {
    //     id: 3,
    //     title: 'Project C',
    //     ti_users: 3, //Seguro que hay que poner esto o se hace en la tabla de índices????
    //     image: '../../assets/images/projects/dislexia.png',
    //     shortDescription: 'App for helping dislexic people',
    //     description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.',
    //     bootcamp: 'UX/UI',
    //     location: 'Barcelona',
    //     state: 'finish',
    //     tags: '',
    //     link: '',
    //     date: '2018-11-01 00:00:00'
    //   }
    // ]
    // this.infoProject = true

    // this.postsArray = [
    //   {
    //     id: 1,
    //     aliasUser: 'Javier Vázquez Rey', //Cómo lo asocio al fk_user?? 
    //     fk_user: 1,
    //     date: '2018-11-15',
    //     title: 'Post A',
    //     content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
    //     image: '../../assets/images/projects/network.jpg',
    //     video: '',
    //     link: '',
    //     likes: '', //En mysql me da que está mal insertada... Why?
    //     tags: ''
    //   },
    //   {
    //     id: 2,
    //     aliasUser: 'Javier Vázquez Rey', //Cómo lo asocio al fk_user?? 
    //     fk_user: 1,
    //     date: '2018-11-16',
    //     title: 'Post B',
    //     content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
    //     image: '../../assets/images/projects/network.jpg',
    //     video: '',
    //     link: '',
    //     likes: '',
    //     tags: ''
    //   },
    //   {
    //     id: 3,
    //     aliasUser: 'Javier Vázquez Rey', //Cómo lo asocio al fk_user?? 
    //     fk_user: 1,
    //     date: '2018-11-15',
    //     title: 'Post C',
    //     content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
    //     image: '../../assets/images/projects/network.jpg',
    //     video: '',
    //     link: '',
    //     likes: '',
    //     tags: ''
    //   },
    //   {
    //     id: 4,
    //     aliasUser: 'Tony', //Cómo lo asocio al fk_user?? 
    //     fk_user: 2,
    //     date: '2018-11-16',
    //     title: 'Post D',
    //     content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
    //     image: '../../assets/images/projects/network.jpg',
    //     video: '',
    //     link: '',
    //     likes: '',
    //     tags: ''
    //   },
    //   {
    //     id: 5,
    //     aliasUser: 'Pollito', //Cómo lo asocio al fk_user?? 
    //     fk_user: 3,
    //     date: '2018-11-15',
    //     title: 'Post E',
    //     content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
    //     image: '../../assets/images/projects/network.jpg',
    //     video: '',
    //     link: '',
    //     likes: '',
    //     tags: ''
    //   },
    //   {
    //     id: 6,
    //     aliasUser: 'Pollito', //Cómo lo asocio al fk_user?? 
    //     fk_user: 3,
    //     date: '2018-11-16',
    //     title: 'Post F',
    //     content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
    //     image: '../../assets/images/projects/network.jpg',
    //     video: '',
    //     link: '',
    //     likes: '',
    //     tags: ''
    //   }
    // ]
  }

  obtener_localStorage() {
    this.idUsuarioLogado = parseInt(localStorage.getItem("idUsuarioLogado"))
    // console.log(this.idUsuarioLogado)
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
        this.apiService.getPostByUser(this.idUsuarioLogado).then((res) => {
          this.postsArray = res.json()
          console.log(this.postsArray)
        })
      }
    })
  }

  onSubmitUpdate() {
    console.log(this.formUpdateUser.value) 
    this.apiService.updateUser(this.idUsuarioLogado, this.formUpdateUser.value).then((res) => {
      console.log(res.json())
      
      const response = res.json()
      if (response.error) {
        alert(response.error)
      }
      else {
        this.apiService.getUserById(this.idUsuarioLogado).then((res) => {
          this.usuarioLogueado = res.json()
        })
      }
    })
  }

  ngOnInit() {
    // this.apiService.getUserById
    this.obtener_localStorage()
    // console.log(this.idUsuarioLogado)


    //Recupero Posts
    this.apiService.getPostByUser(this.idUsuarioLogado).then((res) => {
      this.postsArray = res.json()
      console.log(this.postsArray)
    })

    //Recupero Projects
    this.apiService.getProjectsByIdUser(this.idUsuarioLogado).then((res) => {
      this.projectsArray = res.json()
    })


    this.apiService.getUserById(this.idUsuarioLogado).then((res) => {
      this.usuarioLogueado = res.json()


      this.formUpdateUser.controls.name.setValue(this.usuarioLogueado.name)
      this.formUpdateUser.controls.surname.setValue(this.usuarioLogueado.surname)
      this.formUpdateUser.controls.email.setValue(this.usuarioLogueado.email)
      this.formUpdateUser.controls.password.setValue(this.usuarioLogueado.password)
      this.formUpdateUser.controls.date.setValue(this.usuarioLogueado.date)
      this.formUpdateUser.controls.urlimage.setValue(this.usuarioLogueado.urlimage)
      this.formUpdateUser.controls.location.setValue(this.usuarioLogueado.location)
      this.formUpdateUser.controls.alias.setValue(this.usuarioLogueado.alias)
      this.formUpdateUser.controls.linkFacebook.setValue(this.usuarioLogueado.linkFacebook)
      this.formUpdateUser.controls.linkGithub.setValue(this.usuarioLogueado.linkGithub)
      this.formUpdateUser.controls.linkLinkedin.setValue(this.usuarioLogueado.linkLinkedin)
      this.formUpdateUser.controls.linkMedium.setValue(this.usuarioLogueado.linkMedium)
      this.formUpdateUser.controls.linkYoutube.setValue(this.usuarioLogueado.linkYoutube)
      this.formUpdateUser.controls.linkOthers.setValue(this.usuarioLogueado.linkOthers)
      this.formUpdateUser.controls.shortDescription.setValue(this.usuarioLogueado.shortDescription)
      this.formUpdateUser.controls.description.setValue(this.usuarioLogueado.description)
      this.formUpdateUser.controls.education.setValue(this.usuarioLogueado.education)
      this.formUpdateUser.controls.experience.setValue(this.usuarioLogueado.experience)
      this.formUpdateUser.controls.otherInformation.setValue(this.usuarioLogueado.otherInformation)      

    })

  }
  mostrarDescription(pId){
    console.log(pId)
    //$(this).next().slideToggle(2000, 'easeOutElastic'); //Esto último "easyOutElastic" es para darle efecto rebote
    
  }

  showForm() {
    this.formShow = 1
  }

  hideForm() {
    this.formShow = 0
  }

}
