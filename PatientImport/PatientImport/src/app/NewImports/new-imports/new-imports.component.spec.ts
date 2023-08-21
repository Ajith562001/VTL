import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImportsComponent } from './new-imports.component';

describe('NewImportsComponent', () => {
  let component: NewImportsComponent;
  let fixture: ComponentFixture<NewImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewImportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
