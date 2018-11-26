import { CHANGE_BOOTCAMP_PROJECT, CHANGE_STATE_PROJECT, CHANGE_CENTER_PROJECT, CHANGE_ORDER_PROJECT, CHANGE_BOOTCAMP_JOB, CHANGE_LOCATION_JOB, CHANGE_COMPANY_JOB } from "./proyectos/actions";
import { tassign } from 'tassign';

export interface IAppState{
    // bootcampType: string
    // centerType: string
    // stateType: string
    // orderType: string
    
    projects: {
        bootcamp: string,
        center: string,
        state: string,
        order: string
    }

    jobs: {
        bootcamp: string,
        center: string,
        company: string
    }

}
export interface IAppState2{}

export const INITIAL_STATE: IAppState = {
    // bootcampType: 'allBootcamps',
    // centerType: 'allCenters',
    // stateType: 'allState',
    // orderType: 'featured'

    projects: {
        bootcamp: 'allBootcamps',
        center: 'allCenters',
        state: 'allState',
        order: 'featured'
    },

    jobs: {
        bootcamp: 'allBootcamps',
        center: 'allCenters',
        company: 'allCompanies'
    }

}

export function rootReducer(state, action){
    switch(action.type){
        case CHANGE_BOOTCAMP_PROJECT: {
            console.log(action.data)
            // return tassign(state, { bootcampType: action.data })
            return tassign(state, { projects: { bootcamp: action.data, center: state.projects.center, state: state.projects.state, order: state.projects.order}})
        }
        case CHANGE_CENTER_PROJECT: {
            return tassign(state, { projects:  { bootcamp: state.projects.bootcamp, center: action.data, state: state.projects.state, order: state.projects.order} })
        }
        case CHANGE_STATE_PROJECT: {
            return tassign(state, { projects:  { bootcamp: state.projects.bootcamp, center: state.projects.center, state: action.data, order: state.projects.order} })
        }
        case CHANGE_ORDER_PROJECT: {
            return tassign(state, { projects:  { bootcamp: state.projects.bootcamp, center: state.projects.center, state: state.projects.state, order: action.data} })
        }
        
        case CHANGE_BOOTCAMP_JOB: {
            return tassign(state, { jobs: { bootcamp: action.data, center: state.jobs.center, company: state.jobs.company} })
        }
        case CHANGE_LOCATION_JOB: {
            return tassign(state, { jobs: { bootcamp: state.jobs.bootcamp, center: action.data, company: state.jobs.company}})
        }
        case CHANGE_COMPANY_JOB: {
            return tassign(state, { jobs: { bootcamp: state.jobs.bootcamp, center: state.jobs.center, company: action.data} })
        }
    }

    return state
}