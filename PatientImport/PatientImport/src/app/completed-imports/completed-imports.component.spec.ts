import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedImportsComponent } from './completed-imports.component';

describe('CompletedImportsComponent', () => {
  let component: CompletedImportsComponent;
  let fixture: ComponentFixture<CompletedImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedImportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
