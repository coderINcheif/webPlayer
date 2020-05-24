import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereMusicComponent } from './genere-music.component';

describe('GenereMusicComponent', () => {
  let component: GenereMusicComponent;
  let fixture: ComponentFixture<GenereMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenereMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
