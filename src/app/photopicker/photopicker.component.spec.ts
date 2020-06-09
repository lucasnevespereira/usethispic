import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotopickerComponent } from './photopicker.component';

describe('PhotopickerComponent', () => {
  let component: PhotopickerComponent;
  let fixture: ComponentFixture<PhotopickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotopickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotopickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
