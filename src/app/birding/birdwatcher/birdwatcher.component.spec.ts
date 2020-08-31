import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdwatcherComponent } from './birdwatcher.component';

describe('BirdwatcherComponent', () => {
  let component: BirdwatcherComponent;
  let fixture: ComponentFixture<BirdwatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdwatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdwatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
