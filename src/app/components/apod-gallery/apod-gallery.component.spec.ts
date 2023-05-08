import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodGalleryComponent } from './apod-gallery.component';

describe('ApodGalleryComponent', () => {
  let component: ApodGalleryComponent;
  let fixture: ComponentFixture<ApodGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
