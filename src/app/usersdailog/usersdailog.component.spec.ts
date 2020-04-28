import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdailogComponent } from './usersdailog.component';

describe('UsersdailogComponent', () => {
  let component: UsersdailogComponent;
  let fixture: ComponentFixture<UsersdailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersdailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
