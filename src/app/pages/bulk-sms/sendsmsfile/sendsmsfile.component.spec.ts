import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendsmsfileComponent } from './sendsmsfile.component';

describe('SendsmsfileComponent', () => {
  let component: SendsmsfileComponent;
  let fixture: ComponentFixture<SendsmsfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendsmsfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendsmsfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
