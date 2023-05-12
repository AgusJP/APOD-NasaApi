import { ComponentFixture, TestBed} from '@angular/core/testing';

import { BackButtonComponent } from './back-button.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  let router: RouterModule;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonComponent ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render backButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.bi-box-arrow-in-left').textContent).toContain("Back to dashboard");
  });

  
});
