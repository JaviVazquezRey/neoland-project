import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usersArray: any[]
  projectsArray: any[]
  postsArray: any[]
  infoProject: boolean
  
  constructor() { 
    this.usersArray = [
      {
        id: 1,
        name: 'Javier',
        surname: 'Vázquez Rey',
        email: 'j.vazquezrey@hotmail.com',
        password: 'azulejo1',
        date: '2018-11-22 18:01:33',
        urlimage: '../../assets/images/foto_linkedin_javi.png',
        location: 'Madrid',
        alias: 'Javier Vázquez Rey',
        linkFacebook: 'https://www.facebook.com/profile.php?id=1348106948',
        linkGithub: 'https://github.com/JaviVazquezRey',
        linkLinkedin: 'https://github.com/JaviVazquezRey',
        linkOthers: '',
        shortDescription: 'https://github.com/JaviVazquezRey',
        description: 'Profesional con una formación multidisciplinar y una trayectoria laboral transversal. Mi perfil se define con tres facetas destacables en una posición de Full Stack: ',
        education: 'Bootcamp Full Stack web developer junior. Doble grado ADE - Comunicación Audiovisual. Erasmus in Business Administration',
        experience: 'Consultor de negocio software,         Project Assistant, Financial Assistant and Software tester.',
        otherInformation: 'Gestión del Tiempo, Empatía y  Comunicación, Creatividad, Capacidad de Superación, Adaptabilidad y Trabajo en Equipo.'
      },
      {
        id: 2,
        name: 'Anthony',
        surname: 'Calderón',
        email: 'a.calderon@hotmail.com',
        password: 'azulejo2',
        date: '2018-11-22 18:05:53',
        urlimage: '',
        location: 'NYC',
        alias: 'Tony',
        linkFacebook: 'https://www.facebook.com/tonycalderony',
        linkGithub: '',
        linkLinkedin: 'https://www.linkedin.com/in/anthony-calderon-garcia/',
        linkOthers: '',
        shortDescription: '',
        description: '',
        education: '',
        experience: '',
        otherInformation: ''
      },
      {
        id: 3,
        name: 'Mario',
        surname: 'Girón',
        email: 'm.guillon@hotmail.com',
        password: 'azulejo3',
        date: '2018-11-22 18:05:53',
        urlimage: '',
        location: 'Valencia',
        alias: 'Pollito',
        linkFacebook: '',
        linkGithub: '',
        linkLinkedin: '',
        linkOthers: '',
        shortDescription: 'Full Stack Web & Mobile Developer / Angular 7 / Ionic / iOS / Ruby On Rails',
        description: 'Desarrollador Web y móvil con más de 10 años de experiencia en el mundo de la creación de software. Experto formador con más de una treintena de cursos impartidos sobre nuevas tecnologías.',
        education: 'Tecnico en desarrollo de aplicaciones',
        experience: '',
        otherInformation: ''
      }
    ]


    this.projectsArray = [
      {
        id: 1,
        title: 'Project A',
        ti_users: 1, //Seguro que hay que poner esto o se hace en la tabla de índices????
        image: '../../assets/images/projects/network.jpg',
        shortDescription: 'Social Network for Neolanders',
        description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.',
        bootcamp: 'Full-Stack',
        location: 'Madrid',
        state: 'in-progress',
        tags: '',
        link: '',
        date: '2018-11-14 00:00:00'
      },
      {
        id: 2,
        title: 'Project B',
        ti_users: 2, //Seguro que hay que poner esto o se hace en la tabla de índices????
        image: '../../assets/images/projects/clubDisco.jpg',
        shortDescription: 'A site for connecting artist and clubs',
        description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.',
        bootcamp: 'Full-Stack',
        location: 'Madrid',
        state: 'in-progress',
        tags: '',
        link: '',
        date: '2018-11-20 00:00:00'
      },
      {
        id: 3,
        title: 'Project C',
        ti_users: 3, //Seguro que hay que poner esto o se hace en la tabla de índices????
        image: '../../assets/images/projects/dislexia.png',
        shortDescription: 'App for helping dislexic people',
        description: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.',
        bootcamp: 'UX/UI',
        location: 'Barcelona',
        state: 'finish',
        tags: '',
        link: '',
        date: '2018-11-01 00:00:00'
      }
    ]
    this.infoProject = true

    this.postsArray = [
      {
        id: 1,
        aliasUser: 'Javier Vázquez Rey', //Cómo lo asocio al fk_user?? 
        fk_user: 1,
        date: '2018-11-15',
        title: 'Post A',
        content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
        image: '../../assets/images/projects/network.jpg',
        video: '',
        link: '',
        likes: '', //En mysql me da que está mal insertada... Why?
        tags: ''
      },
      {
        id: 2,
        aliasUser: 'Javier Vázquez Rey', //Cómo lo asocio al fk_user?? 
        fk_user: 1,
        date: '2018-11-16',
        title: 'Post B',
        content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
        image: '../../assets/images/projects/network.jpg',
        video: '',
        link: '',
        likes: '',
        tags: ''
      },
      {
        id: 3,
        aliasUser: 'Javier Vázquez Rey', //Cómo lo asocio al fk_user?? 
        fk_user: 1,
        date: '2018-11-15',
        title: 'Post C',
        content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
        image: '../../assets/images/projects/network.jpg',
        video: '',
        link: '',
        likes: '',
        tags: ''
      },
      {
        id: 4,
        aliasUser: 'Tony', //Cómo lo asocio al fk_user?? 
        fk_user: 2,
        date: '2018-11-16',
        title: 'Post D',
        content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
        image: '../../assets/images/projects/network.jpg',
        video: '',
        link: '',
        likes: '',
        tags: ''
      },
      {
        id: 5,
        aliasUser: 'Pollito', //Cómo lo asocio al fk_user?? 
        fk_user: 3,
        date: '2018-11-15',
        title: 'Post E',
        content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
        image: '../../assets/images/projects/network.jpg',
        video: '',
        link: '',
        likes: '',
        tags: ''
      },
      {
        id: 6,
        aliasUser: 'Pollito', //Cómo lo asocio al fk_user?? 
        fk_user: 3,
        date: '2018-11-16',
        title: 'Post F',
        content: 'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro.',
        image: '../../assets/images/projects/network.jpg',
        video: '',
        link: '',
        likes: '',
        tags: ''
      }
    ]
  }

  ngOnInit() {
  }
  mostrarDescription(pId){
    console.log(pId)
    //$(this).next().slideToggle(2000, 'easeOutElastic'); //Esto último "easyOutElastic" es para darle efecto rebote
    
  }

}
