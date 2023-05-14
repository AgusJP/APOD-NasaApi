import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodGalleryComponent } from './apod-gallery.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApodGalleryComponent', () => {
  let component: ApodGalleryComponent;
  let fixture: ComponentFixture<ApodGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodGalleryComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ApodGalleryComponent', () => {
    expect(component).toBeTruthy();
  });
});
