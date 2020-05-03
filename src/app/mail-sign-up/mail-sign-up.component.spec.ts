import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSignUpComponent } from './mail-sign-up.component';

describe('MailSignUpComponent', () => {
  let component: MailSignUpComponent;
  let fixture: ComponentFixture<MailSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
