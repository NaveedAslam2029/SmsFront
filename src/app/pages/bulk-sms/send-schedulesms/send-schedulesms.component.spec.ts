import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSchedulesmsComponent } from './send-schedulesms.component';

describe('SendSchedulesmsComponent', () => {
  let component: SendSchedulesmsComponent;
  let fixture: ComponentFixture<SendSchedulesmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSchedulesmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSchedulesmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
