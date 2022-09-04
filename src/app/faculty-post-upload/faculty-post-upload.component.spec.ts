import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPostUploadComponent } from './faculty-post-upload.component';

describe('FacultyPostUploadComponent', () => {
  let component: FacultyPostUploadComponent;
  let fixture: ComponentFixture<FacultyPostUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPostUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyPostUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
