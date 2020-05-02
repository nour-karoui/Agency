import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAchievementsComponent } from './number-achievements.component';

describe('NumberAchievementsComponent', () => {
  let component: NumberAchievementsComponent;
  let fixture: ComponentFixture<NumberAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
