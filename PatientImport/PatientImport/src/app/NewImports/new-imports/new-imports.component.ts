import { Component } from '@angular/core';


@Component({
  selector: 'app-new-imports',
  templateUrl: './new-imports.component.html',
  styleUrls: ['./new-imports.component.css']
})
export class NewImportsComponent {

  Regions : string[] = [
    'CA - Bay Area',
    'CA - Central California',
    'DC - Washington DC',
    'GA - Georgia',
    'HI - Hawaii',
    'IA - Iowa',
    'LA - Louisiana',
    'MD - Maryland',
    'MI - Western Michigan',
    'NJ - New Jersey',
    'PA - Central Pennsylvania',
  ]
  RegionsearchTerm: string | null = null;

  Filteredregions : string[] = [];
  // RegionsearchTerm : string =''

  SelectRegion(reg : string){
    this.RegionsearchTerm = reg
  }

  onNextClick(): void {
    if (this.RegionsearchTerm) {
        // Proceed to the next step or action
        console.log('Selected item:', this.RegionsearchTerm);
    } else {
        console.log('Please select an item before proceeding.');
    }
}


  SubRegion : string[] = [
    'Alameda County',
    'Armstrong County',
    'Baltimore City',
    'Beaver County',
    'Cambria County',
    'Clayton County',
    'Douglas County',
    'Hanover County',
    'Kent County',
    'Morris County',
    'Perry County',
    'St. Clair County'

  ]

  Affiliation : string[] = [
    'Atlanta Public Schools',
    'Beyond The Bell',
    'Boys & Girls Club',
    'Capital School District',
    'Christina School District',
    'Evart Public Schools',
    'Hawthorne School District',
    'Jersey City Public Schools',
    'Milford School District',
    'Newark Public Schools',
    'Propel Schools',
    'Wayne Test'

  ]



  FilteredSubRegion : string[] = [];
  SubRegionsearchTerm : string =''

  SelectSubregion(sub : string){
    this.SubRegionsearchTerm = sub
  }

  FilteredAffiliation : string[] = [];
  AffiliationsearchTerm : string =''

  SelectAffiliation(aff : string){
    this.AffiliationsearchTerm = aff
  }

  constructor() {
    this.Filteredregions = this.Regions
    this.FilteredSubRegion = this.SubRegion
    this.FilteredAffiliation =this.Affiliation
  }
  onAffiliationSearchInputChange(event: any) {
    const AffiliationsearchTerm = event.target.value.toLowerCase();
    this.FilteredAffiliation = this.Affiliation.filter(item => item.toLowerCase().includes(AffiliationsearchTerm));
  }



  onSubRegionSearchInputChange(event: any) {
    const SubRegionsearchTerm = event.target.value.toLowerCase();
    this.FilteredSubRegion = this.SubRegion.filter(item => item.toLowerCase().includes(SubRegionsearchTerm));
  }

  onRegionSearchInputChange(event: any) {
    const RegionsearchTerm = event.target.value.toLowerCase();
    this.Filteredregions = this.Regions.filter(item => item.toLowerCase().includes(RegionsearchTerm));
  }

}
