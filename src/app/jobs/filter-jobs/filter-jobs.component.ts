import { Component, OnInit } from '@angular/core';
import { NgRedux } from '../../../../node_modules/@angular-redux/store';
import { IAppState } from '../../store';
import { CHANGE_BOOTCAMP_JOB, CHANGE_LOCATION_JOB, CHANGE_COMPANY_JOB } from '../../proyectos/actions';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.css']
})
export class FilterJobsComponent implements OnInit {

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }
  onBootcampChange($event){
    console.log($event.target.value)
    this.ngRedux.dispatch({
      type: CHANGE_BOOTCAMP_JOB,
      data: $event.target.value
    })
  }
  onLocationChange($event){
    this.ngRedux.dispatch({
      type: CHANGE_LOCATION_JOB,
      data: $event.target.value
    })
  }
  onCompanyChange($event){
    this.ngRedux.dispatch({
      type: CHANGE_COMPANY_JOB,
      data: $event.target.value
    })
  }
}
