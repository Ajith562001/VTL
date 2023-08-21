import { Component } from '@angular/core';

@Component({
  selector: 'app-pendingimports1',
  templateUrl: './pendingimports1.component.html',
  styleUrls: ['./pendingimports1.component.css']
})
export class Pendingimports1Component {

 










  // selectAllA: string[] = [];

  selectAllA: boolean = false;
  selectAllB: boolean = false;











  Job: string[] = [
    'Fern School - 5/8/23 - Lannister',
    'Garinger High - 22/7/23 - Hannah',
    'Dover High School- 12/7/23 - Clay',


  ]

  Patient: string[] = [
    'Adrian Smith',
    'Alan White',
    "Ben affleck",

    "Clay Jensen",
    "chris hemsworth",
    "chris evans",
    'Hannah Baker',
    'Harry Potter',
    "Jon snow",
    "Ned Stark",
    "Robert Downey Jr",

    "stan lee",

    "Stannis Barathion",
    "Tywin Lannister",

    // "Naruto Uzumaki",
    // "Sasuke Uchiha",
    // "Itachi Uchiha",

  ]

  Filteredjob: string[] = [];
  JobsearchTerm: string = ''

  SelectJob(job: string) {
    this.JobsearchTerm = job
  }


  FilteredPatient: string[] = [];
  PatientsearchTerm: string = ''

  SelectPatient(patient: string) {
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


  listBItems = [
    { name: 'item2', label: 'Item 1 (List B)', value: 'item1-b' },
    { name: 'item2', label: 'Item 2 (List B)', value: 'item2-b' },
    // Add more items as needed
  ];


  arrayIndex: number = 0;
  totalExistingPtients: number = 0;

  DeclinedSer = "Declined Services"
  Inactive = "Inactive"

  NewPatient: Patient = {
    SiteName: "Ave Elementary",
    FirstName: "Harry",
    LastName: "Potter",
    DateOfBirth: "05/06/2012",
    Gender: "Boy",
    ParentName : "Henry",
    StudentId : 19,
    PhoneNumber:"441-846-8477",
    StreetAddress:'ABC Street ',
    EmailAddress:'Harry@gmail.com'
  }

  public ChangeIndex(): void {
    try {
      if (this.arrayIndex == this.ExistingPatients.length - 1) {
        this.arrayIndex = 0
      }
      else {
        this.arrayIndex++
      }
    }
    catch (ex) {
      console.log(ex)
    }
  }

  public ChangeBackIndex(): void {
    try {
      if (this.arrayIndex == 0) {
        this.arrayIndex = this.ExistingPatients.length - 1;
      }
      else {
        this.arrayIndex--
      }
    }
    catch (ex) {
      console.log(ex)
    }
  }


  ExistingPatients: ExistingPatient[] = [
    {
      SiteName: "Abraham Lincoln High School",
      FirstName: "Harry",
      LastName: "Smith",
      DateOfBirth: "05/06/2012",
      Gender: "Male",
      LastExamDate: "02/01/2022",
      Status: "Inactive",
      ParentName: "Srinu",
      StudentId:11,
      PhoneNumber:"441-256-8768",
      StreetAddress:'ABC Street ',
      EmailAddress:'Harry1@gmail.com'
    },

    {
      SiteName: "Berewick Elementary",
      FirstName: "Harry",
      LastName: "Mark",
      DateOfBirth: "15/08/2012",
      Gender: "Male",
      LastExamDate: "02/01/2022",
      Status: "Active",
      ParentName: "srrru",
      StudentId:12,
      PhoneNumber:"492-458-7676",
      StreetAddress:'123 Street ',
      EmailAddress:'Harry123@gmail.com'
    },

    {
      SiteName: "Cardinal Elementary",
      FirstName: "Harry",
      LastName: "Marish",
      DateOfBirth: "11/02/2012",
      Gender: "MALE",
      LastExamDate: "02/01/2022",
      Status: "Declined Services",
      ParentName: "srinu",
      StudentId:13,
      PhoneNumber:"441-846-8463",
      StreetAddress:'XYZ Street ',
      EmailAddress:'123@gmail.com'
    }
  ];
}

export interface Patient {
  SiteName: string
  FirstName: string
  LastName: string
  DateOfBirth: string
  Gender: string
  ParentName: string
  StudentId:Number
  PhoneNumber:string
  StreetAddress:string
  EmailAddress:string
}

export interface ExistingPatient {
  SiteName: string
  FirstName: string
  LastName: string
  DateOfBirth: string
  Gender: string
  LastExamDate: string
  Status: string
  ParentName: string
  StudentId:Number
  PhoneNumber:string
  StreetAddress:string
  EmailAddress:string
}




