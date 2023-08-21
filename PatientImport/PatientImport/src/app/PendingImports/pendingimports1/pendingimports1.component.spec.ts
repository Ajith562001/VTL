import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pendingimports1Component } from './pendingimports1.component';

describe('Pendingimports1Component', () => {
  let component: Pendingimports1Component;
  let fixture: ComponentFixture<Pendingimports1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pendingimports1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pendingimports1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
