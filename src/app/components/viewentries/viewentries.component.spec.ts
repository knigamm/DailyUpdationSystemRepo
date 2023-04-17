import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewentriesComponent } from './viewentries.component';

describe('ViewentriesComponent', () => {
  let component: ViewentriesComponent;
  let fixture: ComponentFixture<ViewentriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewentriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
