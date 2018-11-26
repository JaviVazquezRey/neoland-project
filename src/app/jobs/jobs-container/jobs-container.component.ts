import { Component, OnInit } from '@angular/core';
import { select } from '../../../../node_modules/@angular-redux/store';

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
  constructor() { 
    this.jobsArray = [
      {
        id: 1,
        title: 'Programador junior Front-End',
        company: 'Cognizant',
        logo: '../../../assets/images/jobs/cognizant.png',
        bootcamp: 'Full Stack',
        shortDescription: 'Cognizant sigue ampliando sus equipos orientados a desarrollo en tecnologías punteras con una nueva localización: Valladolid. ctualmente buscamos un referente técnico de equipo con sólida experiencia en Javascript, HTML5, CSS3 y frameworks como Angular, React.JS, Vue o Polymer.',
        description: '',
        requirements: '',
        location: 'Madrid',
        salary: '21.000 - 24.000 €',
        date: 'Today',
        linkedin: 'https://www.linkedin.com/company/cognizant/life/',
        link: 'https://www.linkedin.com/jobs/view/972960244/?eBP=JOB_SEARCH_ORGANIC&refId=91a84cd8-aa54-4aaf-aa61-2f41119d189c&trk=d_flagship3_search_srp_jobs',
        mail: 'employment@cognizant.com'
      },
      {
        id: 2,
        title: 'Angular Developer Junior Cliente Final',
        company: 'HUB TALENT',
        logo: '../../../assets/images/jobs/hubtalent.jpg',
        bootcamp: 'Full Stack',
        shortDescription: 'Seleccionamos para incorporación directa en plantilla de importante compañía del sector financiero, especializada en la gestión de medios de pago, un Desarrollador (m/f) Front con experiencia de al menos unos meses con Angular. La persona seleccionada se integrará en el equipo interno de desarrollo Front de la compañía participando en los proyectos de adaptación y creación de apps, móvil y web de la compañía.',
        description: '',
        requirements: '',
        location: 'Madrid',
        salary: '15.000 - 24.000 €',
        date: '1 days ago',
        linkedin: '',
        link: 'https://www.infojobs.net/hubtalent/em-i98565453545254728566841012075549212361',
        mail: 'rrhh@hubtatlent.es'
      },
      {
        id: 3,
        title: 'Junior UI/UX Designer',
        company: 'Desico',
        logo: '../../../assets/images/jobs/desico.jpg',
        bootcamp: 'UX/UI',
        shortDescription: 'We are looking for a Junior UX/UI Designer who can help us design the user experience of Desicos digital products here at our office in Madrid. This is a great opportunity to participate in big projects and to grow as a professional.',
        description: '',
        requirements: '',
        location: 'Barcelona',
        salary: '21.000 - 24.000 €',
        date: '1 day ago',
        linkedin: '',
        link: 'https://www.infojobs.net/madrid/junior-ui-ux-designer/of-iffa233f8544fd3bf96950ad92ee045?applicationOrigin=search-new',
        mail: 'infoemployment@desico.com'
      },
      {
        id: 4,
        title: 'Diseñador UX/UI',
        company: 'gmv',
        logo: '../../../assets/images/jobs/gmv.jpg',
        bootcamp: 'UX/UI',
        shortDescription: 'En GMV buscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización del mismo, pasando por el proceso de toma de requisitos, análisis de la experiencia de usuario, diseño de la interfaz y finalizando con la maquetación de la herramienta diseñada anteriormente.',
        description: '',
        requirements: '',
        location: 'Madrid',
        salary: '21.000 - 23.000 €',
        date: '2 days ago',
        linkedin: '',
        link: 'https://www.infojobs.net/boecillo/disenador-ux-ui/of-ife4be4cc05446cbccef34996feed1f?applicationOrigin=search-new',
        mail: 'infoemployment@desico.com'
      },
      {
        id: 5,
        title: 'Programador junior Front-End',
        company: 'Cognizant',
        logo: '../../../assets/images/jobs/cognizant.png',
        bootcamp: 'Full Stack',
        shortDescription: 'Cognizant sigue ampliando sus equipos orientados a desarrollo en tecnologías punteras con una nueva localización: Valladolid. ctualmente buscamos un referente técnico de equipo con sólida experiencia en Javascript, HTML5, CSS3 y frameworks como Angular, React.JS, Vue o Polymer.',
        description: '',
        requirements: '',
        location: 'Madrid',
        salary: '21.000 - 24.000 €',
        date: '4 days ago',
        linkedin: 'https://www.linkedin.com/company/cognizant/life/',
        link: 'https://www.linkedin.com/jobs/view/972960244/?eBP=JOB_SEARCH_ORGANIC&refId=91a84cd8-aa54-4aaf-aa61-2f41119d189c&trk=d_flagship3_search_srp_jobs',
        mail: 'employment@cognizant.com'
      },
      {
        id: 6,
        title: 'Angular Developer Junior Cliente Final',
        company: 'HUB TALENT',
        logo: '../../../assets/images/jobs/hubtalent.jpg',
        bootcamp: 'Full Stack',
        shortDescription: 'Seleccionamos para incorporación directa en plantilla de importante compañía del sector financiero, especializada en la gestión de medios de pago, un Desarrollador (m/f) Front con experiencia de al menos unos meses con Angular. La persona seleccionada se integrará en el equipo interno de desarrollo Front de la compañía participando en los proyectos de adaptación y creación de apps, móvil y web de la compañía.',
        description: '',
        requirements: '',
        location: 'Madrid',
        salary: '15.000 - 24.000 €',
        date: '5 days ago',
        linkedin: '',
        link: 'https://www.infojobs.net/hubtalent/em-i98565453545254728566841012075549212361',
        mail: 'rrhh@hubtatlent.es'
      },
      {
        id: 7,
        title: 'Junior UI/UX Designer',
        company: 'Desico',
        logo: '../../../assets/images/jobs/desico.jpg',
        bootcamp: 'UX/UI',
        shortDescription: 'We are looking for a Junior UX/UI Designer who can help us design the user experience of Desicos digital products here at our office in Madrid. This is a great opportunity to participate in big projects and to grow as a professional.',
        description: '',
        requirements: '',
        location: 'Barcelona',
        salary: '21.000 - 24.000 €',
        date: '5 day ago',
        linkedin: '',
        link: 'https://www.infojobs.net/madrid/junior-ui-ux-designer/of-iffa233f8544fd3bf96950ad92ee045?applicationOrigin=search-new',
        mail: 'infoemployment@desico.com'
      },
      {
        id: 8,
        title: 'Diseñador UX/UI',
        company: 'gmv',
        logo: '../../../assets/images/jobs/gmv.jpg',
        bootcamp: 'UX/UI',
        shortDescription: 'En GMV buscamos un diseñador UX/UI y maquetador con capacidad de llevar a cabo un proyecto desde concepción inicial hasta la finalización del mismo, pasando por el proceso de toma de requisitos, análisis de la experiencia de usuario, diseño de la interfaz y finalizando con la maquetación de la herramienta diseñada anteriormente.',
        description: '',
        requirements: '',
        location: 'Madrid',
        salary: '21.000 - 23.000 €',
        date: '1 week ago',
        linkedin: '',
        link: 'https://www.infojobs.net/boecillo/disenador-ux-ui/of-ife4be4cc05446cbccef34996feed1f?applicationOrigin=search-new',
        mail: 'infoemployment@desico.com'
      }
    ]
  }

  ngOnInit() {
  }

}
