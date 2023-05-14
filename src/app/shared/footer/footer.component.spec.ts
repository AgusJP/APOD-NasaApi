import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FooterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct content in footer sections', () => {
    const footerSections = fixture.nativeElement.querySelectorAll('.footer-section');

    expect(footerSections.length).toBe(3);

    const apodSection = footerSections[0];
    const makeWithLoveSection = footerSections[1];
    const projectSection = footerSections[2];

    expect(apodSection.querySelector('h3').textContent).toBe('APOD');
    expect(apodSection.querySelector('p').textContent).toBe('Astronomy Picture of the Day');

    expect(makeWithLoveSection.querySelector('h3').textContent).toBe('Make with love ❤ by');
    expect(makeWithLoveSection.querySelector('p').textContent).toBe('Agustín Jiménez Polonio');

    expect(projectSection.querySelector('h3').textContent).toBe('Project');
    expect(projectSection.querySelector('p').textContent).toBe('Angular Fetching Nasa Api');
  });
  
});
