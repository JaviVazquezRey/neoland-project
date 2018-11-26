import { Component, OnInit } from '@angular/core';
import { NgRedux } from '../../../../node_modules/@angular-redux/store';
import { IAppState } from '../../store';
import { CHANGE_BOOTCAMP_PROJECT, CHANGE_CENTER_PROJECT, CHANGE_STATE_PROJECT, CHANGE_ORDER_PROJECT } from '../actions';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onBootcampChange($event){
    console.log($event.target.value)
    this.ngRedux.dispatch({
      type: CHANGE_BOOTCAMP_PROJECT,
      data: $event.target.value
    })
  }
  onCenterChange($event){
    this.ngRedux.dispatch({
      type: CHANGE_CENTER_PROJECT,
      data: $event.target.value
    })
  }
  onStateChange($event){
    this.ngRedux.dispatch({
      type: CHANGE_STATE_PROJECT,
      data: $event.target.value
    })
  }
  onOrderChange($event){
    this.ngRedux.dispatch({
      type: CHANGE_ORDER_PROJECT,
      data: $event.target.value
    })
  }
}
