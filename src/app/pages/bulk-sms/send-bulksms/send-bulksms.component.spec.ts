import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBulksmsComponent } from './send-bulksms.component';

describe('SendBulksmsComponent', () => {
  let component: SendBulksmsComponent;
  let fixture: ComponentFixture<SendBulksmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendBulksmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendBulksmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
