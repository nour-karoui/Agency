import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageItemComponent } from './blog-page-item.component';

describe('BlogPageItemComponent', () => {
  let component: BlogPageItemComponent;
  let fixture: ComponentFixture<BlogPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
