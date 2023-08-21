import { Component } from '@angular/core';

@Component({
  selector: 'app-completed-imports',
  templateUrl: './completed-imports.component.html',
  styleUrls: ['./completed-imports.component.css']
})
export class CompletedImportsComponent {


  Job : string[] = [
    'Ave Elementary - 16/7/23 - Ryan',
    'East School - 9/7/23 - Ben',
    'North High - 2/7/23 - Snow',
    'Brody Middle - 1/7/23- Carol',

  ]

  Patient : string[] = [
    'Austin Thomas',
    'Benjamin Michael',
    'Cameron Samuel',
    'James Brown',
    'Henry cavill',
    'Henry Davis',
    'Nicholas Ryan',
    
 
    
  ]

  Filteredjob: string[] = [];
  JobsearchTerm : string =''

  SelectJob(job : string){
    this.JobsearchTerm = job
  }

  FilteredPatient: string[] = [];
  PatientsearchTerm : string =''

  SelectPatient(patient : string){
    this.PatientsearchTerm = patient
  }


  constructor() {
    this.Filteredjob = this.Job
    this.FilteredPatient = this.Patient
  }

  onJobSearchInputChange(event: any) {
    const JobsearchTerm = event.target.value.toLowerCase();
    this.Filteredjob = this.Job.filter(item => item.toLowerCase().includes(JobsearchTerm));
  }

  onPatientSearchInputChange(event: any) {
    const PatientsearchTerm = event.target.value.toLowerCase();
    this.FilteredPatient = this.Patient.filter(item => item.toLowerCase().includes(PatientsearchTerm));
  }



}
