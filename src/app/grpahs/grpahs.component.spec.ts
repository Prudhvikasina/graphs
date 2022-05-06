import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpahsComponent } from './grpahs.component';

describe('GrpahsComponent', () => {
  let component: GrpahsComponent;
  let fixture: ComponentFixture<GrpahsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpahsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpahsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
