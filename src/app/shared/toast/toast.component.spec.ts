import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { Input } from '@angular/core';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create ToastComponent', () => {
    expect(component).toBeTruthy();
  });


  it('should display the toast message', () => {
    const toastMessage = 'Test message';
    component.toastMessage = toastMessage as Input
    fixture.detectChanges();

    const toastElement = fixture.nativeElement.querySelector('.toast-container');
    const messageElement = toastElement.querySelector('.alert strong');

    expect(toastElement).toBeTruthy();
    expect(messageElement.textContent).toContain(toastMessage);
  });

});
