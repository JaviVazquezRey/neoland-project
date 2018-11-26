import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  projectsArray: any[]
  postsArray: any[]
  infoProject: boolean
  
  constructor() { 
    this.projectsArray = [
      {id: 1, title: 'Project A', objetive: 'Social Network for Neolanders', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
      {id: 2, title: 'Project B', objetive: 'A site for connecting artist and clubs', bootcamp: 'Full-Stack', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image:'../../assets/images/projects/clubDisco.jpg'},
      {id: 3, title: 'Project C', objetive: 'App for helping dislexic people', bootcamp: 'UX/UI', description:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/dislexia.png'}
    ]
    this.infoProject = true

    this.postsArray = [
      {title: 'Post A', subtitle: 'Subtitle post A', author: 'Chiquito', content:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
      {title: 'Post B', subtitle: 'Subtitle post B', author: 'Paparl', content:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},
      {title: 'Post C', subtitle: 'Subtitle post C', author: 'Fistro Pecador', content:'Lorem fistrum no puedor te va a hasé pupitaa te va a hasé pupitaa papaar papaar torpedo benemeritaar jarl condemor fistro. Te va a hasé pupitaa al ataquerl torpedo ese hombree al ataquerl la caidita tiene musho peligro qué dise usteer ese pedazo de te va a hasé pupitaa fistro. Fistro quietooor diodeno va usté muy cargadoo me cago en tus muelas va usté muy cargadoo.', image: '../../assets/images/projects/network.jpg'},

    ]
  }

  ngOnInit() {
  }
  mostrarDescription(pId){
    console.log(pId)
    //$(this).next().slideToggle(2000, 'easeOutElastic'); //Esto último "easyOutElastic" es para darle efecto rebote
    
  }

}
