import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildasubmitComponent } from './childasubmit.component';

describe('ChildasubmitComponent', () => {
  let component: ChildasubmitComponent;
  let fixture: ComponentFixture<ChildasubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildasubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildasubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
