

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpageComponent } from '../regpage/regpage.component';


describe('LoginComponent', () => {
  let component: RegpageComponent;
  let fixture: ComponentFixture<RegpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
