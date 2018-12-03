import { Component, OnInit } from '@angular/core';
import { select } from '../../../../node_modules/@angular-redux/store';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-jobs-container',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.css']
})
export class JobsContainerComponent implements OnInit {

  @select(['jobs', 'bootcamp']) bootcamp: string;
  @select(['jobs', 'center']) center: string;
  @select(['jobs', 'company']) company: string;

  jobsArray: any[]
  constructor(private apiService: ApiService) { 
    // this.jobsArray = [
    //   {
    //     id: 1,
    //     title: 'Programador junior Front-End',
    //     company: 'Cognizant',
    //     logo: '../../../assets/images/jobs/cognizant.png',
    //     bootcamp: 'Full Stack',
    //     shortDescription: 'Buscamos un técnico de equipo con sólida experiencia en Javascript, HTML5, CSS3 y frameworks como Angular, React.JS, Vue o Polymer.',
    //     description: 'Cognizant busca para Valladolid a un referente técnico de equipo con sólida experiencia en Javascript, HTML5, CSS3 y frameworks como Angular, React.JS, Vue o Polymer.',
    //     requirements: 'Javascript, HTML5, CSS3 y frameworks como Angular, React.JS, Vue o Polymer.',
    //     location: 'Madrid',
    //     salary: '21.000', //En mysql no puedo poner 21.000 - 24.000 €, así que de momento he puesto 21.000
    //     date: '2018-11-27', //Solo puedo poner current (2018-11-27) time, no 'Today'
    //     linkedin: 'https://www.linkedin.com/company/cognizant/life/',
    //     link: 'https://www.linkedin.com/jobs/view/972960244/?eBP=JOB_SEARCH_ORGANIC&refId=91a84cd8-aa54-4aaf-aa61-2f41119d189c&trk=d_flagship3_search_srp_jobs',
    //     contactName: 'María',
    //     mail: 'employment@cognizant.com'
    //   },
    //   {
    //     id: 2,
    //     title: 'Angular Developer Junior Cliente Final',
    //     company: 'HUB TALENT',
    //     logo: '../../../assets/images/jobs/hubtalent.jpg',
    //     bootcamp: 'Full Stack',
    //     shortDescription: 'Desarrollador Front con experiencia en Angular para importante empresa del sector financiero.',
    //     description: 'Seleccionamos para importante compañía  financiera un Desarrollador (m/f) Front con experiencia con Angular. para integrarse en el equipo interno de desarrollo Front de la compañía participando en los proyectos.',
    //     requirements: 'Angular',
    //     location: 'Madrid',
    //     salary: '15.000',
    //     date: '2018-11-14',
    //     linkedin: '',
    //     link: 'https://www.infojobs.net/hubtalent/em-i98565453545254728566841012075549212361',
    //     contactName: 'Laura',
    //     mail: 'rrhh@hubtatlent.es'
    //   },
    //   {
    //     id: 3,
    //     title: 'Junior UI/UX Designer',
    //     company: 'Desico',
    //     logo: '../../../assets/images/jobs/desico.jpg',
    //     bootcamp: 'UX/UI',
    //     shortDescription: 'Junior UX/UI Designer who can help us design the user experience of Desicos digital products.',
    //     description: 'We are looking for a Junior UX/UI Designer who can help us design the user experience of Desicos digital products here at our office in Madrid. This is a great opportunity to participate in big projects and to grow as a professional.',
    //     requirements: 'None',
    //     location: 'Barcelona',
    //     salary: '21.000',
    //     date: '2018-11-14',
    //     linkedin: '',
    //     link: 'https://www.infojobs.net/madrid/junior-ui-ux-designer/of-iffa233f8544fd3bf96950ad92ee045?applicationOrigin=search-new',
    //     contactName: 'Mario',
    //     mail: 'infoemployment@desico.com'
    //   },
    //   {
    //     id: 4,
    //     title: 'Diseñador UX/UI',
    //     company: 'gmv',
    //     logo: '../../../assets/images/jobs/gmv.jpg',
    //     bootcamp: 'UX/UI',
    //     shortDescription: 'Buscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización.',
    //     description: 'En GMV buscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización, pasando por la toma de requisitos, análisis de la experiencia de usuario, diseño de la interfaz y maquetación.',
    //     requirements: 'None',
    //     location: 'Madrid',
    //     salary: '21.000',
    //     date: '2018-11-15',
    //     linkedin: '',
    //     link: 'https://www.infojobs.net/boecillo/disenador-ux-ui/of-ife4be4cc05446cbccef34996feed1f?applicationOrigin=search-new',
    //     contactName: 'Carlota',
    //     mail: 'infoemployment@desico.com'
    //   },
    //   {
    //     id: 5,
    //     title: 'Programador junior Front-End',
    //     company: 'Cognizant',
    //     logo: '../../../assets/images/jobs/cognizant.png',
    //     bootcamp: 'Full Stack',
    //     shortDescription: 'Buscamos un referente técnico de equipo con sólida experiencia en Javascript, HTML5, CSS3 y frameworks como Angular, React.JS, Vue o Polymer.',
    //     description: 'Cognizant sigue ampliando sus equipos en Valladolid. Actualmente buscamos un referente técnico de equipo con sólida experiencia en Javascript, HTML5, CSS3 y frameworks como Angular, React.JS, Vue o Polymer.',
    //     requirements: '',
    //     location: 'Madrid',
    //     salary: '24.000',
    //     date: '2018-11-20',
    //     linkedin: 'https://www.linkedin.com/company/cognizant/life/',
    //     link: 'https://www.linkedin.com/jobs/view/972960244/?eBP=JOB_SEARCH_ORGANIC&refId=91a84cd8-aa54-4aaf-aa61-2f41119d189c&trk=d_flagship3_search_srp_jobs',
    //     contactName: 'Jesús',
    //     mail: 'employment@cognizant.com'
    //   },
    //   {
    //     id: 6,
    //     title: 'Angular Developer Junior Cliente Final',
    //     company: 'HUB TALENT',
    //     logo: '../../../assets/images/jobs/hubtalent.jpg',
    //     bootcamp: 'Full Stack',
    //     shortDescription: 'Desarrollador Front con experiencia en Angular para importante empresa del sector financiero.',
    //     description: 'Seleccionamos para importante compañía  financiera un Desarrollador (m/f) Front con experiencia con Angular. para integrarse en el equipo interno de desarrollo Front de la compañía participando en los proyectos.',
    //     requirements: 'Angular (6 months)',
    //     location: 'Madrid',
    //     salary: '24.000',
    //     date: '2018-11-08',
    //     linkedin: '',
    //     link: 'https://www.infojobs.net/hubtalent/em-i98565453545254728566841012075549212361',
    //     contactName: 'Diego',
    //     mail: 'rrhh@hubtatlent.es'
    //   },
    //   {
    //     id: 7,
    //     title: 'Junior UI/UX Designer',
    //     company: 'Desico',
    //     logo: '../../../assets/images/jobs/desico.jpg',
    //     bootcamp: 'UX/UI',
    //     shortDescription: 'Buscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización.',
    //     description: 'En GMV buscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización, pasando por la toma de requisitos, análisis de la experiencia de usuario, diseño de la interfaz y maquetación.',
    //     requirements: 'None',
    //     location: 'Barcelona',
    //     salary: '24.000',
    //     date: '2018-11-26',
    //     linkedin: '',
    //     link: 'https://www.infojobs.net/madrid/junior-ui-ux-designer/of-iffa233f8544fd3bf96950ad92ee045?applicationOrigin=search-new',
    //     contactName: 'Juan',
    //     mail: 'infoemployment@desico.com'
    //   },
    //   {
    //     id: 8,
    //     title: 'Diseñador UX/UI',
    //     company: 'gmv',
    //     logo: '../../../assets/images/jobs/gmv.jpg',
    //     bootcamp: 'UX/UI',
    //     shortDescription: 'EBuscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización.',
    //     description: 'En GMV buscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización, pasando por la toma de requisitos, análisis de la experiencia de usuario, diseño de la interfaz y maquetación.',
    //     requirements: 'None',
    //     location: 'Barcelona',
    //     salary: '24.000',
    //     date: '2018-11-27',
    //     linkedin: '',
    //     link: 'https://www.infojobs.net/boecillo/disenador-ux-ui/of-ife4be4cc05446cbccef34996feed1f?applicationOrigin=search-new',
    //     mail: 'infoemployment@gmv.com'
    //   }
    // ]
  }

  ngOnInit() {
    this.apiService.getJobs().then((res) => {
      console.log(res.json())
      this.jobsArray = res.json()
    })
  }
  irALinkOferta(linkWebsite) {
    
  }

}
