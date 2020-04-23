import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesmsfileComponent } from './schedulesmsfile.component';

describe('SchedulesmsfileComponent', () => {
  let component: SchedulesmsfileComponent;
  let fixture: ComponentFixture<SchedulesmsfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesmsfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesmsfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
