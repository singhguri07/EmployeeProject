import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerpanelComponent } from './managerpanel.component';

describe('ManagerpanelComponent', () => {
  let component: ManagerpanelComponent;
  let fixture: ComponentFixture<ManagerpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
