import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContracdashboardComponent } from './contracdashboard.component';

describe('ContracdashboardComponent', () => {
  let component: ContracdashboardComponent;
  let fixture: ComponentFixture<ContracdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContracdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContracdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
