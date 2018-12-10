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

  getPosts() {
    this.apiService.getPosts().then((res) => {
      this.postsArray = res.json()
    })
  }

  onSubmit() {
    console.log(this.formNewPost.value)
    this.apiService.newPost(this.formNewPost.value).then((res) => {
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
    this.getPosts()
  }

}
