import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcolicasComponent } from './alcolicas.component';

describe('AlcolicasComponent', () => {
  let component: AlcolicasComponent;
  let fixture: ComponentFixture<AlcolicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcolicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcolicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
