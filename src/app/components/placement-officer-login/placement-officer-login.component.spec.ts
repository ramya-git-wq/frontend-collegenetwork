import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementOfficerLoginComponent } from './placement-officer-login.component';

describe('PlacementOfficerLoginComponent', () => {
  let component: PlacementOfficerLoginComponent;
  let fixture: ComponentFixture<PlacementOfficerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementOfficerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementOfficerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
