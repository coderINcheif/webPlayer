import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereCardComponent } from './genere-card.component';

describe('GenereCardComponent', () => {
  let component: GenereCardComponent;
  let fixture: ComponentFixture<GenereCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenereCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
