import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTileComponent } from './music-tile.component';

describe('MusicTileComponent', () => {
  let component: MusicTileComponent;
  let fixture: ComponentFixture<MusicTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
