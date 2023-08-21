import { Component } from '@angular/core';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {
  isFilleSelected: boolean = false;

  onFilleChange(event: any) {
    const file = event.target.files[0];
    if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
      this.isFilleSelected = true;
    } else {
      this.isFilleSelected = false;
    }
  }

  selectedFile: File | null = null;
  isNotExcel : boolean = false;

  // constructor(private modalService : NgbModal) {}





  onOkClick(): void {
      if (this.selectedFile) {
          console.log('File imported:', this.selectedFile.name);
      } else {
          console.log('No file selected.');
      }
  }


  Site : string[] = [
    '14th Avenue School',
    'Aberdeen Elementary',
    'Artesia High',
    'Brody Middle',
    'Castlemont High',
    'Congress Elementary',
    'Dole Middle School',
    'Dover High',
    'East Elementary',
    'Fern Elementary',
    'Garinger High'

  ]

  FilteredSite : string[] = [];
  SitesearchTerm : string =''

  SelectSite(sit : string){
    this.SitesearchTerm = sit
  }

  constructor() {
    this.FilteredSite = this.Site

  }
  onSiteSearchInputChange(event: any) {
    const SitesearchTerm = event.target.value.toLowerCase();
    this.FilteredSite = this.Site.filter(item => item.toLowerCase().includes(SitesearchTerm));
  }
}
