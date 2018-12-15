import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-network',
  templateUrl: './user-network.component.html',
  styleUrls: ['./user-network.component.css']
})
export class UserNetworkComponent implements OnInit {

  idUser: number
  user:any[]

  // usersArray: any[]
  projectsArray: any[]
  postsArray: any[]
  infoProject: boolean
  
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.idUser) //NO PINTA porque dice "Cannot read property urlimage of undefined"
      this.idUser = params.idUser
    })
  }

  ngOnInit() {

    this.apiService.getUserById(this.idUser).then((res) => {
      this.user = res.json()
    })
    this.apiService.getPostByUser(this.idUser).then((res) => {
      this.postsArray = res.json()
    })
    this.apiService.getProjectsByIdUser(this.idUser).then((res) => {
      this.projectsArray = res.json()
    })

  }

}
