import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create SpinnerComponent', () => {
    expect(component).toBeTruthy();
  });

  
  it('should display the spinner with correct structure', () => {
    const spinnerElement = fixture.nativeElement.querySelector('.moon');
    const imageElement = spinnerElement.querySelector('img');
    const listItems = spinnerElement.querySelectorAll('ul li');

    expect(spinnerElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
    expect(listItems.length).toBe(7);
  });

});
