import { ComponentFixture, TestBed} from '@angular/core/testing';

import { BackButtonComponent } from './back-button.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BackButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create BackButtonComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render backButton', () => {
    const spanElement = fixture.nativeElement.querySelector('span.arrow');
    const iElement = fixture.nativeElement.querySelector('i.bi.bi-box-arrow-in-left');

    expect(spanElement).toBeTruthy();
    expect(iElement).toBeTruthy();
    expect(spanElement.textContent).toContain('Back to dashboard');
  });
  
  it('should navigate to dashboard on BackButtonTS', () => {
    spyOn(router, 'navigate');
    component.backToDashboard();
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should navigate to dashboard on BackButtonHTML', () => {
    spyOn(router, 'navigate');
    const spanElement = fixture.debugElement.query(By.css('span.arrow'));
    spanElement.nativeElement.dispatchEvent(new Event('click'));
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  })

});
